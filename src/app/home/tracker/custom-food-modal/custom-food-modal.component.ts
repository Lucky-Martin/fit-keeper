import { Component, ViewChild} from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { UpdateGraphService } from 'src/app/food-list/food-graph-preview/update-graph.service';
import { Food } from '../food.model';
import { TrackingService } from '../tracking.service';

@Component({
  selector: 'app-custom-food-modal',
  templateUrl: './custom-food-modal.component.html',
  styleUrls: ['./custom-food-modal.component.scss'],
})
export class CustomFoodModalComponent {
  @ViewChild('modal') modal: IonModal;
  food: Food = new Food();

  constructor(private trackingService: TrackingService,
              private updateGraphService: UpdateGraphService) {}

  updateGraph() {
    this.updateGraphService.updateGraphPreview(this.food.macros);
  }

  reset() {
    this.food = new Food();
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.food.calories += this.food.macros.protein * 4;
    this.food.calories += this.food.macros.carbs * 4;
    this.food.calories += this.food.macros.fats * 9;
    this.trackingService.AddFood(this.food);

    this.reset();
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {

    }
  }
}