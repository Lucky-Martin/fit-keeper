import { Component, Input, ViewChild} from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { UpdateGraphService } from 'src/app/food-search/food-list/food-graph-preview/update-graph.service';
import { IFetchFoodData } from 'src/app/food-search/food-response.model';
import { Food, Macros } from '../food.model';

@Component({
  selector: 'app-custom-food-modal',
  templateUrl: './custom-food-modal.component.html',
  styleUrls: ['./custom-food-modal.component.scss'],
})
export class CustomFoodModalComponent {
  @Input() button: boolean = true;
  @ViewChild('modal') modal: IonModal;
  food: Food;
  quantity: number = 1;
  private initialMacros: Macros;

  constructor(private modalController: ModalController) {
    if (this.food == undefined) {
      this.food = new Food();
    }
  }

  onWeightChanged(event) {
    if (event.target.value < 1) {
      return this.food.weight = 1;
    } else if (event.target.value > 1000) {
      return this.food.weight = 1000;
    }

    if (!this.initialMacros) {
      this.initialMacros = this.food.macros;
    }

    const multiplier = event.target.value / 100;

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
    return this.modalController.dismiss(foodCopy, 'confirm');
  }

  reset() {
    this.food = new Food();
  }
}