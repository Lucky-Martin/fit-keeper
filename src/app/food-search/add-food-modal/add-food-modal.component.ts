import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IonModal, ModalController} from '@ionic/angular';
import {FavouritesService} from 'src/app/food-search/favourites/favourites.service';
import {Food, Macros} from '../../home/tracker/food.model';

@Component({
  selector: 'app-custom-food-modal',
  templateUrl: './add-food-modal.component.html',
  styleUrls: ['./add-food-modal.component.scss'],
})
export class AddFoodModalComponent implements OnInit {
  @Input() button: boolean = true;
  @ViewChild('modal') modal: IonModal;
  food: Food;
  quantity: number = 1;
  calories: number = 0;
  favourite: boolean = false;
  private initialMacros: Macros;
  private favourites: string[] = [];

  constructor(private favouritesService: FavouritesService,
              private modalController: ModalController) {
    if (this.food == undefined) {
      this.food = new Food();
    }

    this.favouritesService.fetchFavourites().then(value => {
      this.favourites = value;
    });
  }

  ngOnInit(): void {
    this.calories = this.food.calories;
    this.favourite = this.favourites.indexOf(this.food.name) > -1;
  }

  toggleFavourite() {
    if (this.favourite) {
      this.favouritesService.removeFoodFromFavourites(this.food.name).then(() => {
        this.favourite = false;
      });
    } else {
      this.favouritesService.addFoodToFavourites(this.food.name).then(() => {
        this.favourite = true;
      });
    }

  }

  async onAddFavourite() {
    await this.favouritesService.addFoodToFavourites(this.food.name);
  }

  async onRemoveFavourite() {
    await this.favouritesService.removeFoodFromFavourites(this.food.name);
  }

  onWeightChanged(event) {
    if (event.value && event.value < 1) {
      return this.food.weight = 1;
    } else if (event.value > 1000) {
      return this.food.weight = 1000;
    }

    if (!this.initialMacros) {
      this.initialMacros = this.food.macros;
    }

    this.food.weight = event.value;

    const multiplier = event.value / 100;

    const foodCopyJson = JSON.stringify(this.initialMacros);

    this.food.macros.protein = Math.round(this.initialMacros.protein * multiplier);
    this.food.macros.carbs = Math.round(this.initialMacros.carbs * multiplier);
    this.food.macros.fats = Math.round(this.initialMacros.fats * multiplier);

    this.initialMacros = JSON.parse(foodCopyJson);
  }

  onMacrosChanged(nutrientName: string, value: number) {
    this.food.macros[nutrientName] = value;
  }

  updateQuantity(increase: boolean) {
    if (!increase && this.quantity === 1) return;

    this.quantity += increase ? 1 : -1;
  }

  cancel() {
    this.reset();
    return this.modalController.dismiss(null, 'cancel');
  }

  confirm() {
    const foodCopy = this.food;
    this.reset();
    return this.modalController.dismiss({food: foodCopy, quantity: this.quantity}, 'confirm');
  }

  reset() {
    this.food = new Food();
  }
}
