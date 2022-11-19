import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CustomFoodModalComponent } from '../home/tracker/custom-food-modal/custom-food-modal.component';
import { Food } from '../home/tracker/food.model';
import { TrackingService } from '../home/tracker/tracking.service';
import { FoodService } from './food.service';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.scss'],
})
export class FoodSearchComponent implements OnInit {
  query: string;
  foundFoods: string[] = [];
  fetching: boolean = false;

  constructor(private trackingService: TrackingService,
              private foodService: FoodService,
              private modalController: ModalController) { }

  ngOnInit() {}

  private async openInputModal(food: Food) {
    this.fetching = false;
    this.query = "";

    const modal = await this.modalController.create({
      component: CustomFoodModalComponent,
      componentProps: {
        food: food
      }
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.onAddFood(data);
    }
  }

  private onAddFood(food: Food) {
    food.calories += food.macros.protein * 4;
    food.calories += food.macros.carbs * 4;
    food.calories += food.macros.fats * 9;
    this.trackingService.AddFood(food);
  }

  inputChanged(event) {
    const query: string = event.detail.value;
    
    if (query === "") {
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
    this.foundFoods = [];

    // Fetch food data
    this.foodService.fetchFoodData(food).subscribe(async value => {
      const food = new Food();
      food.name = value.text;
      food.macros.protein = value.parsed[0].food.nutrients.PROCNT;
      food.macros.carbs = value.parsed[0].food.nutrients.CHOCDF;
      food.macros.fats = value.parsed[0].food.nutrients.FAT;
      food.calories = value.parsed[0].food.nutrients.ENERC_KCAL;

      this.openInputModal(food);
    }, err => {
      console.log(err);
    })
  }
}
