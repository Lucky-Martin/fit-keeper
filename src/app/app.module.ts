import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FoodSearchComponent } from './food-search/food-search.component';
import { FoodListComponent } from './food-search/food-list/food-list.component';
import { CustomFoodModalComponent } from './home/tracker/custom-food-modal/custom-food-modal.component';
import { HomePage } from './home/home.page';
import { TrackerComponent } from './home/tracker/tracker.component';
import { FoodGraphPreviewComponent } from './food-search/food-list/food-graph-preview/food-graph-preview.component';
import { FormsModule } from '@angular/forms';
import { MealHistoryComponent } from './home/meal-history/meal-history.component';
import { WorkoutsComponent } from './workouts/workouts.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ToolbarComponent, FoodSearchComponent, FoodListComponent, CustomFoodModalComponent, HomePage, TrackerComponent, FoodGraphPreviewComponent, MealHistoryComponent, WorkoutsComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
