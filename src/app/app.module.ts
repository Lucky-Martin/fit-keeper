import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeHeaderComponent} from './headers/home-header/home-header.component';
import {FoodSearchComponent} from './food-search/food-search.component';
import {FoodListComponent} from './food-search/food-list/food-list.component';
import {AddFoodModalComponent} from './food-search/add-food-modal/add-food-modal.component';
import {HomePage} from './home/home.page';
import {TrackerComponent} from './home/tracker/tracker.component';
import {FoodGraphPreviewComponent} from './food-search/food-list/food-graph-preview/food-graph-preview.component';
import {FormsModule} from '@angular/forms';
import {MealHistoryComponent} from './home/meal-history/meal-history.component';
import {WorkoutsComponent} from './workouts/workouts.component';
import {TrackerNutrientComponent} from './home/tracker/tracker-nutrient/tracker-nutrient.component';
import {DaySelectorComponent} from './home/day-selector/day-selector.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MealHistoryHeaderComponent} from './headers/meal-history-header/meal-history-header.component';
import {HistoryComponent} from './history/history.component';
import {NutrientButtonComponent} from './food-search/add-food-modal/nutrient-button/nutrient-button.component';
import {FavouritesComponent} from './food-search/favourites/favourites.component';
import { HistoryFoodListComponent } from './history/history-food-list/history-food-list.component';
import { FavouritesCardComponent } from './history/favourites-card/favourites-card.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsButtonComponent } from './settings/settings-button/settings-button.component';
import {EditSettingModalComponent} from './settings/edit-setting-modal/edit-setting-modal.component';
import {
  ProfileSettingContentComponent
} from './settings/edit-setting-modal/profile-setting-content/profile-setting-content.component';
import {
  GoalsSettingComponentComponent
} from './settings/edit-setting-modal/goals-setting-component/goals-setting-component.component';
import {
    AppearanceSettingComponentComponent
} from './settings/edit-setting-modal/appearance-setting-component/appearance-setting-component.component';

@NgModule({
    declarations: [AppComponent, HomeHeaderComponent, MealHistoryHeaderComponent, ToolbarComponent,
        FoodSearchComponent, FoodListComponent, AddFoodModalComponent,
        HomePage, HistoryComponent, TrackerComponent, FoodGraphPreviewComponent,
        MealHistoryComponent, WorkoutsComponent, TrackerNutrientComponent,
        DaySelectorComponent, MealHistoryComponent, NutrientButtonComponent,
        FavouritesComponent, HistoryFoodListComponent, FavouritesCardComponent,
        SettingsComponent, SettingsButtonComponent, EditSettingModalComponent,
        ProfileSettingContentComponent, GoalsSettingComponentComponent, AppearanceSettingComponentComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
