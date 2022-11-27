import { Component, Input, ViewChild} from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { UpdateGraphService } from 'src/app/food-search/food-list/food-graph-preview/update-graph.service';
import { IFetchFoodData } from 'src/app/food-search/food-response.model';
import { Food } from '../food.model';

@Component({
  selector: 'app-custom-food-modal',
  templateUrl: './custom-food-modal.component.html',
  styleUrls: ['./custom-food-modal.component.scss'],
})
export class CustomFoodModalComponent {
  @Input() button: boolean = true;
  @ViewChild('modal') modal: IonModal;
  food: Food;
  foodCopy: Food;

  constructor(private updateGraphService: UpdateGraphService,
              private modalController: ModalController) {
    if (this.food == undefined) {
      this.food = new Food();
    }
  }

  onWeightChanged(event) {
    if (!this.foodCopy) {
      this.foodCopy = this.food;
    }

    const multiplier = event.target.value / 100;

    console.log(this.foodCopy);
    this.food.macros.protein = Math.round(this.foodCopy.macros.protein * multiplier);
    this.food.macros.carbs = Math.round(this.foodCopy.macros.carbs * multiplier);
    this.food.macros.fats = Math.round(this.foodCopy.macros.fats * multiplier);
  }

  updateGraph() {
    this.updateGraphService.updateGraphPreview(this.food.macros);
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