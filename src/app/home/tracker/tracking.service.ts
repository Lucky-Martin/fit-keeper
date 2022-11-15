import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Food, IMacros, Macros } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  foods: Food[] = [];
  calories: number = 0;
  calorieGoal = 3000;
  macrosListener: Subject<Macros> = new Subject<Macros>();

  constructor() { }

  public AddFood(food: Food): void {
    this.foods.push(food);
    this.calories += food.calories;

    this.macrosListener.next(this.GetMacros());
  }

  public RemoveFood(food: Food): void {
    const mealIndex: number = this.foods.findIndex(meal => {
      return meal.name === food.name;
    });

    if (mealIndex > -1) {
      this.foods.slice(mealIndex, 1);
    }
  }

  public GetMacros(): Macros {
    const macros = new Macros();

    for (let i = 0; i < this.foods.length; i++) {
      const element = this.foods[i];

      macros.protein += Number(element.macros.protein);
      macros.carbs += Number(element.macros.carbs);
      macros.fats += Number(element.macros.fats);
    }

    return macros;
  }

  public GetMacrosAsObservable(): Observable<Macros> {
    return this.macrosListener.asObservable();
  }

  public GetCaloriesLeft(): number {
    return this.calorieGoal - this.calories;
  }

  public Reset(): void {
    this.foods = [];
    this.calories = 0;
  }
}
