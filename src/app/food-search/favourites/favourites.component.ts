import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IonModal, ModalController} from '@ionic/angular';
import {Food} from 'src/app/home/tracker/food.model';
import {TrackingService} from 'src/app/home/tracker/tracking.service';
import {IFetchFoodData} from '../food-response.model';
import {FoodService} from '../food.service';
import {FavouritesService} from './favourites.service';
import {AddFoodModalComponent} from '../add-food-modal/add-food-modal.component';
import translate from 'translate';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  @Output() closed: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('modal') modal: IonModal;
  favourites: IFetchFoodData[] = [];
  favouritesBG: string[] = [];
  open = true;
  fetching = false;

  constructor(private favouritesService: FavouritesService,
              private trackingService: TrackingService,
              private modalController: ModalController,
              private foodService: FoodService) {
  }

  async ngOnInit() {
    await this.loadFavourites();
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

    await this.onClose();

    await modal.present();

    const {data, role} = await modal.onWillDismiss();

    if (role === 'confirm') {
      await this.trackingService.addFood(data.food, data.quantity);
    }
  }

  async removeFromFavourites(food: IFetchFoodData) {
    this.fetching = true;
    await this.favouritesService.removeFoodFromFavourites(food.text);
    await this.loadFavourites();
  }

  async onClose() {
    this.open = false;
    await this.modal.dismiss();
    this.closed.emit();
  }

  private async loadFavourites() {
    const favouritesList: string[] = await this.favouritesService.fetchFavourites() || [];
    this.favouritesBG = favouritesList;

    this.fetching = true;
    this.favourites = [];

    for (let i = 0; i < favouritesList.length; i++) {
      this.foodService.fetchFoodData(await translate(favouritesList[i], {from: 'bg', to: 'en'})).subscribe(food => {
        this.favourites.push(food);

        if (i === favouritesList.length - 1) {
          this.fetching = false;
        }
      });
    }

    if (favouritesList.length === 0) {
      this.fetching = false;
    }
  }
}
