import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FoodSearchComponent } from './food-search/food-search.component';
import { HistoryComponent } from './history/history.component';
import { HomePage } from './home/home.page';
import { UserService } from './home/user/user.service';
import { WorkoutsComponent } from './workouts/workouts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [UserService],
    component: HomePage
  },
  {
    path: 'meal_history',
    canActivate: [UserService],
    component: HistoryComponent
  },
  {
    path: 'food',
    canActivate: [UserService],
    component: FoodSearchComponent
  },
  {
    path: 'workouts',
    canActivate: [UserService],
    component: WorkoutsComponent
  },
  {
    path: 'setup',
    loadChildren: () => import('./setup/setup.module').then( m => m.SetupPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
