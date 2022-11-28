import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeHeaderComponent } from './headers/home-header/home-header.component';
import { FoodSearchComponent } from './food-search/food-search.component';
import { FoodListComponent } from './food-search/food-list/food-list.component';
import { CustomFoodModalComponent } from './home/tracker/custom-food-modal/custom-food-modal.component';
import { HomePage } from './home/home.page';
import { TrackerComponent } from './home/tracker/tracker.component';
import { FoodGraphPreviewComponent } from './food-search/food-list/food-graph-preview/food-graph-preview.component';
import { FormsModule } from '@angular/forms';
import { MealHistoryComponent } from './home/meal-history/meal-history.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { TrackerNutrientComponent } from './home/tracker/tracker-nutrient/tracker-nutrient.component';
import { DaySelectorComponent } from './home/day-selector/day-selector.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MealHistoryHeaderComponent } from './headers/meal-history-header/meal-history-header.component';
import { HistoryComponent } from './history/history.component';
import { NutrientButtonComponent } from './home/tracker/custom-food-modal/nutrient-button/nutrient-button.component';

@NgModule({
  declarations: [AppComponent, HomeHeaderComponent, MealHistoryHeaderComponent, ToolbarComponent,
    FoodSearchComponent, FoodListComponent, CustomFoodModalComponent, 
    HomePage, HistoryComponent, TrackerComponent, FoodGraphPreviewComponent, 
    MealHistoryComponent, WorkoutsComponent, TrackerNutrientComponent,
    DaySelectorComponent, MealHistoryComponent, NutrientButtonComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
