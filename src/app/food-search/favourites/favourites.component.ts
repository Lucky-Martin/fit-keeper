import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IonModal, ModalController} from '@ionic/angular';
import {Food} from 'src/app/home/tracker/food.model';
import {TrackingService} from 'src/app/home/tracker/tracking.service';
import {IFetchFoodData} from '../food-response.model';
import {FoodService} from '../food.service';
import {FavouritesService} from './favourites.service';
import {AddFoodModalComponent} from '../add-food-modal/add-food-modal.component';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  @Output() closed: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('modal') modal: IonModal;
  favourites: IFetchFoodData[] = [];
  open = true;
  fetching = false;

  constructor(private favouritesService: FavouritesService,
              private trackingService: TrackingService,
              private modalController: ModalController,
              private foodService: FoodService) {
  }

  async ngOnInit() {
    const favouritesList: string[] = await this.favouritesService.fetchFavourites() || [];

    for (let i = 0; i < favouritesList.length; i++) {
      this.foodService.fetchFoodData(favouritesList[i]).subscribe(food => {
        this.favourites.push(food);
      });
    }
  }

  async onAddFood(foodData: IFetchFoodData) {
    const food = new Food();
    food.name = foodData.text;
    food.image = foodData.parsed[0].food.image;
    food.weight = 100;
    food.macros.protein = foodData.parsed[0].food.nutrients.PROCNT;
    food.macros.carbs = foodData.parsed[0].food.nutrients.CHOCDF;
    food.macros.fats = foodData.parsed[0].food.nutrients.FAT;
    food.calories = foodData.parsed[0].food.nutrients.ENERC_KCAL;

    const modal = await this.modalController.create({
      component: AddFoodModalComponent,
      componentProps: {food}
    });

    await modal.present();

    const {data, role} = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.trackingService.addFood(data, 1);
    }
  }

  async onClose() {
    this.open = false;
    await this.modal.dismiss();
    this.closed.emit();
  }
}
