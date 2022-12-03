import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Food} from '../home/tracker/food.model';
import {TrackingService} from '../home/tracker/tracking.service';
import {FoodService} from './food.service';
import {AddFoodModalComponent} from './add-food-modal/add-food-modal.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.scss'],
})
export class FoodSearchComponent implements OnInit {
  query: string;
  foundFoods: string[] = [];
  fetching = false;
  favouritesOpened = false;
  predefinedDate: string = null;
  predefinedFoodQuery: string = null;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private trackingService: TrackingService,
              private foodService: FoodService,
              private modalController: ModalController) {
  }

  async ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.predefinedDate = params.day;
        this.predefinedFoodQuery = params.food;
        console.log(this.predefinedDate, this.predefinedFoodQuery);
        
        if (this.predefinedFoodQuery) {
          this.fetching = true;
          
          this.foodService.fetchFoodData(this.predefinedFoodQuery).subscribe(async value => {
            const food = new Food();
            food.name = value.text;
            food.image = value.parsed[0].food.image;
            food.weight = 100;
            food.macros.protein = value.parsed[0].food.nutrients.PROCNT;
            food.macros.carbs = value.parsed[0].food.nutrients.CHOCDF;
            food.macros.fats = value.parsed[0].food.nutrients.FAT;
            food.calories = value.parsed[0].food.nutrients.ENERC_KCAL;
      
            this.openInputModal(food);
          }, err => {
            console.log(err);
          });
        }
      }
    );
  }

  openFavourites() {
    this.favouritesOpened = true;
  }

  closeFavourites() {
    this.favouritesOpened = false;
  }

  inputChanged(event) {
    const query: string = event.detail.value;

    if (query === '') {
      this.foundFoods = [];
      return;
    }

    this.fetching = true;

    this.foodService.fetchFoodAutocomplete(query).subscribe(value => {
      this.foundFoods = value;
      this.fetching = false;
    }, err => {
        console.log(err);
      this.fetching = false;
    });
  }

  onFoodSelected(food: string) {
    this.fetching = true;
    this.query = '';
    this.foundFoods = [];

    // Fetch food data
    this.foodService.fetchFoodData(food).subscribe(async value => {
      const food = new Food();
      food.name = value.text;
      food.image = value.parsed[0].food.image;
      food.weight = 100;
      food.macros.protein = value.parsed[0].food.nutrients.PROCNT;
      food.macros.carbs = value.parsed[0].food.nutrients.CHOCDF;
      food.macros.fats = value.parsed[0].food.nutrients.FAT;
      food.calories = value.parsed[0].food.nutrients.ENERC_KCAL;

      this.openInputModal(food);
    }, err => {
      console.log(err);
    });
  }

  private async openInputModal(food: Food) {
    this.fetching = false;
    this.query = '';

    const modal = await this.modalController.create({
      component: AddFoodModalComponent,
      componentProps: {food}
    });

    await modal.present();

    const {data, role} = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.onAddFood(data);
    } else {
      this.predefinedFoodQuery = null;
    }
  }

  private async onAddFood({food, quantity}) {
    if (!food.calories) {
      food.calories += food.macros.protein * 4;
      food.calories += food.macros.carbs * 4;
      food.calories += food.macros.fats * 9;
    }

    if (this.predefinedDate) {
      if (this.predefinedDate === new Date().toDateString()) {
        await this.trackingService.addFood(food, quantity);
        await this.trackingService.saveCurrentDayFoods();
        await this.router.navigate(['/meal_history'], {
          queryParams: {day: this.predefinedDate}
        });
        return;
      }

      const mealHistory = await this.trackingService.fetchMealHistory();
      let meals: Food[] = mealHistory[this.predefinedDate];
      if (!meals) {
        meals = [];
      }
      for(let i = 0; i < quantity; i++) {
        meals.push(food);
      }
      mealHistory[this.predefinedDate] = meals;
      this.trackingService.saveMealHistory(JSON.stringify(mealHistory));
      await this.router.navigate(['/meal_history'], {
        queryParams: {day: this.predefinedDate}
      });
    } else {
      this.trackingService.addFood(food, quantity);
      await this.router.navigate(['/home']);
    }
  }
}
