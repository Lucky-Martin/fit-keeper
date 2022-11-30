import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Food, IMacros, Macros} from './food.model';
import {User} from '../../setup/user.model';
import {Preferences} from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  foods: Food[] = [];
  calories = 0;
  calorieGoal: number;
  macrosListener: Subject<Macros> = new Subject<Macros>();
  currentDay: string;

  private readonly calorieGoalKey = 'CALORIE_GOAL';
  private readonly consumedCaloriesKey = 'CONSUMED_CALORIES';
  private readonly mealHistoryKey = 'MEAL_HISTORY';
  private readonly currentDayKey = 'CURRENT_DAY';
  private readonly currentDayFoodsKey = 'CURRENT_DAY_FOODS';

  constructor() {
    this.init();
  }

  public async init() {
    this.currentDay = new Date().toDateString();

    await this.fetchCalorieGoal();
    await this.fetchConsumedCalories();

    if (this.currentDay !== await this.fetchCurrentDay()) {
      await this.addCurrentDayToMealHistory().then(async () => {
        await this.reset();
        await this.saveCurrentDayFoods(true);
        this.setCurrentDay().then(() => {
          this.macrosListener.next(this.getMacros());
        });

        await this.setDay(new Date());
      });
    } else {
      await this.setDay(new Date());
    }
  }

  public async setDay(day: Date) {
    await this.addCurrentDayToMealHistory();
    this.reset();

    this.currentDay = day.toDateString();
    await this.setCurrentDay(this.currentDay);

    const meals: { [day: string]: Food[] } = await this.fetchMealHistory();
    let foodForTheDay: Food[] = [];

    if (meals[this.currentDay]) {
      foodForTheDay = meals[this.currentDay];
      for (let i = 0; i < foodForTheDay.length; i++) {
        this.calories += this.calculateCalories(foodForTheDay[i].macros);
      }
    }

    this.foods = foodForTheDay;

    await this.saveCurrentDayFoods();
    this.macrosListener.next(this.getMacros());
  }

  public calculateCalories(macros: IMacros): number {
    let calories = 0;
    calories += macros.protein * 4;
    calories += macros.carbs * 4;
    calories += macros.fats * 9;

    return calories;
  }

  public getMondayOfWeek(): Date {
    const today = new Date();
    const first = today.getDate() - today.getDay() + 1;

    const monday = new Date(today.setDate(first));
    return monday;
  }

  public async calculateCalorieGoal(user: User) {
    let bmr: number;
    let amr: number;

    if (user.gender === 'male') {
      bmr = 66.47 + (13.75 * user.weight) + (5.003 * user.height) - (6.755 * user.age);
    } else {
      bmr = 655.1 + (9.563 * user.weight) + (1.850 * user.height) - (4.676 * user.age);
    }

    switch (user.activity) {
      case 'sedentary':
        amr = bmr * 1.2;
        break;
      case 'lightly_active':
        amr = bmr * 1.375;
        break;
      case 'moderately_active':
        amr = bmr * 1.55;
        break;
      case 'very_active':
        amr = bmr * 1.9;
        break;
    }

    if (user.goal === 'loose_weight') {
      amr -= 400;
    } else if (user.goal === 'gain_weight') {
      amr += 400;
    }

    this.calorieGoal = Math.round(amr);
    await Preferences.set({key: this.calorieGoalKey, value: this.calorieGoal.toString()});
  }

  public addFood(food: Food, quantity: number = 1): void {
    if (this.foods.length === 0) {
      this.foods = [];
    }

    for (let i = 0; i < quantity; i++) {
      this.foods.push(food);
      this.calories += food.calories;
    }

    this.saveConsumedCalories();
    this.saveCurrentDayFoods();
    this.addCurrentDayToMealHistory().then(() => {
      this.macrosListener.next(this.getMacros());
    });
  }

  public removeFood(food: Food): void {
    const mealIndex: number = this.foods.findIndex(meal => meal.name === food.name);

    if (mealIndex > -1) {
      this.foods.slice(mealIndex, 1);
    }
  }

  public getMacros(): Macros {
    const macros = new Macros();

    this.fetchCurrentDayFoods().then(value => {
      this.foods = value;

      for (let i = 0; i < this.foods.length; i++) {
        const element = this.foods[i];

        macros.protein += Math.round(Number(element.macros.protein));
        macros.carbs += Math.round(Number(element.macros.carbs));
        macros.fats += Math.round(Number(element.macros.fats));
      }
    });

    return macros;
  }

  public getMacrosAsObservable(): Observable<Macros> {
    return this.macrosListener.asObservable();
  }

  public getCaloriesLeft(): number {
    this.fetchCalorieGoal();
    return this.calorieGoal - this.calories;
  }

  public async fetchCurrentDay(): Promise<string> {
    const {value} = await Preferences.get({key: this.currentDayKey});
    return value;
  }

  public async fetchMealHistory(): Promise<{ [day: string]: Food[] }> {
    const {value} = await Preferences.get({key: this.mealHistoryKey});
    let parsedValue: { [day: string]: Food[] };

    if (value === undefined || !value) {
      parsedValue = {};
    } else {
      parsedValue = JSON.parse(value);
    }

    return parsedValue;
  }

  public reset(): void {
    this.foods = [];
    this.calories = 0;
  }

  private async fetchCalorieGoal() {
    const {value} = await Preferences.get({key: this.calorieGoalKey});
    this.calorieGoal = Number(value);
  }

  private async saveConsumedCalories() {
    await Preferences.set({key: this.consumedCaloriesKey, value: this.calories.toString()});
  }

  private async fetchConsumedCalories() {
    const currentlySavedDay: string = await this.fetchCurrentDay();
    if (currentlySavedDay !== this.currentDay) {
      await this.addCurrentDayToMealHistory();
      await this.saveCurrentDayFoods();
      await this.saveConsumedCalories();
    }

    const {value} = await Preferences.get({key: this.consumedCaloriesKey});
    this.calories = Number(value);
  }

  private async addCurrentDayToMealHistory() {
    const mealHistory: { [day: string]: Food[] } = await this.fetchMealHistory();
    const dayId: string = await this.fetchCurrentDay();
    mealHistory[dayId] = await this.fetchCurrentDayFoods();

    await Preferences.set({key: this.mealHistoryKey, value: JSON.stringify(mealHistory)});
  }

  private async setCurrentDay(date?: string) {
    await Preferences.set({key: this.currentDayKey, value: date ? date : new Date().toDateString()});
  }

  private async fetchCurrentDayFoods(): Promise<Food[]> {
    const {value} = await Preferences.get({key: this.currentDayFoodsKey});
    return JSON.parse(value);
  }

  private async saveCurrentDayFoods(empty: boolean = false) {
    await Preferences.set({key: this.currentDayFoodsKey, value: empty ? '[]' : JSON.stringify(this.foods)});
  }
}
