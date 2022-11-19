import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Food, Macros } from './food.model';
import { User } from './../user/user.model';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  private readonly calorieGoalKey = "CALORIE_GOAL";
  private readonly consumedCaloriesKey = "CONSUMED_CALORIES";
  private readonly mealHistoryKey = "MEAL_HISTORY";
  private readonly currentDayKey = "CURRENT_DAY";
  private readonly currentDayFoodsKey = "CURRENT_DAY_FOODS";
  foods: Food[] = [];
  calories: number = 0;
  calorieGoal: number;
  macrosListener: Subject<Macros> = new Subject<Macros>();
  currentDay: string;

  constructor() { 
    this.fetchCalorieGoal();
    this.fetchConsumedCalories();
    this.currentDay = new Date().toDateString();
  }

  private async fetchCalorieGoal() {
    const { value } = await Preferences.get({ key: this.calorieGoalKey });
    this.calorieGoal = Number(value);
  }

  private async saveConsumedCalories() {
    await Preferences.set({ key: this.consumedCaloriesKey, value: this.calories.toString() });
  }

  private async fetchConsumedCalories() {
    const currentlySavedDay: string = await this.fetchCurrentDay();
    if (currentlySavedDay !== this.currentDay) {
      await this.addCurrentDayToMealHistory(currentlySavedDay);
      await this.saveCurrentDayFoods();
      await this.saveConsumedCalories();
    }

    const { value } = await Preferences.get({ key: this.consumedCaloriesKey });
    this.calories = Number(value);
  }

  private async addCurrentDayToMealHistory(dayId: string) {
    const mealHistory: {[day: string] : Food[]} = await this.fetchMealHistory();
    mealHistory[dayId] = await this.fetchCurrentDayFoods();

    await Preferences.set({key: this.mealHistoryKey, value: JSON.stringify(mealHistory)});

    this.foods = [];
    this.calories = 0;
    this.setCurrentDay();
  }

  public async fetchMealHistory(): Promise<{[day: string] : Food[]}> {
    let {value} = await Preferences.get({ key: this.mealHistoryKey });
    let parsedValue: {[day: string] : Food[]};

    if (value == undefined || !value) {
      parsedValue = {};
    } else {
      console.log(value);
      
      parsedValue = JSON.parse(value);
    }

    return parsedValue;
  }

  private async setCurrentDay() {
    await Preferences.set({ key: this.currentDayKey, value: new Date().toDateString() });
  }

  private async fetchCurrentDay(): Promise<string> {
    let {value} = await Preferences.get({ key: this.currentDayKey });

    return value;
  }

  private async fetchCurrentDayFoods(): Promise<Food[]> {
    let {value} = await Preferences.get({ key: this.currentDayFoodsKey });
    return JSON.parse(value);
  }

  private async saveCurrentDayFoods() {
    await Preferences.set({ key: this.currentDayFoodsKey, value: JSON.stringify(this.foods) });
  }

  public getMondayOfWeek(): Date {
    const today = new Date();
    const first = today.getDate() - today.getDay() + 1;

    const monday = new Date(today.setDate(first));
    return monday;
  }

  public async CalculateCalorieGoal(user: User) {
    let bmr: number;
    let amr: number;

    if (user.gender === "male") {
      bmr = 66.47 + (13.75 * user.weight) + (5.003 * user.height) - (6.755 * user.age);
    } else {
      bmr = 655.1 + (9.563 * user.weight) + (1.850 * user.height) - (4.676 * user.age);
    }

    switch(user.activity) {
      case 'sedentary':
        amr = bmr * 1.2;
        break;
      case 'lightly_active':
        amr = bmr * 1.375;
        break;
      case 'moderatly_active':
        amr = bmr * 1.55;
        break;
      case 'very_active':
        amr = bmr * 1.9;
        break;
    }

    if (user.goal == "loose_weight") {
      amr -= 400;
    } else if (user.goal == "gain_weight") {
      amr += 400;
    }

    this.calorieGoal = Math.round(amr);
    await Preferences.set({ key: this.calorieGoalKey, value: this.calorieGoal.toString() });
  }

  public AddFood(food: Food, quantity: number = 1): void {
    for(let i = 0; i < quantity; i++) {
      this.foods.push(food);
      this.calories += food.calories;
    }

    this.saveConsumedCalories();
    this.saveCurrentDayFoods();
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
