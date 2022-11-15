import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TrackerComponent } from './tracker/tracker.component';
import { CustomFoodModalComponent } from './tracker/custom-food-modal/custom-food-modal.component';
import { FoodGraphPreviewComponent } from '../food-list/food-graph-preview/food-graph-preview.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, TrackerComponent, CustomFoodModalComponent, FoodGraphPreviewComponent]
})
export class HomePageModule {}
