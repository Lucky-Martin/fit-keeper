import { Component, Input, OnInit, ViewChild} from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { Food, Macros } from '../food.model';
import { TrackingService } from '../tracking.service';

@Component({
  selector: 'app-custom-food-modal',
  templateUrl: './custom-food-modal.component.html',
  styleUrls: ['./custom-food-modal.component.scss'],
})
export class CustomFoodModalComponent implements OnInit {
  @Input() button: boolean = true;
  @ViewChild('modal') modal: IonModal;
  food: Food;
  quantity: number = 1;
  calories: number = 0;
  private initialMacros: Macros;

  constructor(private trackingService: TrackingService,
              private modalController: ModalController) {
    if (this.food == undefined) {
      this.food = new Food();
    }
  }

  ngOnInit(): void {
    this.calories = this.food.calories;
  }

  async onAddFavourite() {
    await this.trackingService.addFoodToFavourites(this.food.name);
  }

  async onRemoveFavourite() {
    await this.trackingService.removeFoodFromFavourites(this.food.name);
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