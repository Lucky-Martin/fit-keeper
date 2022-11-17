import { Component, Input, ViewChild} from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { UpdateGraphService } from 'src/app/food-search/food-list/food-graph-preview/update-graph.service';
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

  constructor(private updateGraphService: UpdateGraphService,
              private modalController: ModalController) {
    if (this.food == undefined) {
      this.food = new Food();
    }

    console.log(this.food);
    
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