import {Component, OnInit} from '@angular/core';
import {TrackingService} from '../home/tracker/tracking.service';
import {Food, Macros} from '../home/tracker/food.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  date: Date = new Date();
  macrosOverview: Macros = new Macros();
  meals: Food[];
  totalCalories = 0;
  day: string;
  selectingDay: boolean;

  constructor(private trackingService: TrackingService) { }

  async ngOnInit() {
    this.day = new Date().toDateString();
    await this.fetchMeals();
  }

  async onDateSelected(event) {
    const date = event.detail.value;
    await this.trackingService.setDay(new Date(date));
    this.day = new Date(date).toDateString();
    await this.fetchMeals();
    this.selectingDay = false;
  }

  onDateChanged(changeString: string) {
    switch (changeString) {
      case 'select_day':
        this.selectingDay = true;
        break;
      case 'previous':
        const yesterday = this.date.getDate() - 1;
        this.date = new Date(this.date.setDate(yesterday));
        this.day = this.date.toDateString();
        break;
      case 'next':
        const tomorrow = this.date.getDate() + 1;
        this.date = new Date(this.date.setDate(tomorrow));
        this.day = this.date.toDateString();
        break;
      default:

        break;
    }
  }

  private async fetchMeals()
  {
    const mealHistory = await this.trackingService.fetchMealHistory();
    this.meals = mealHistory[this.day];

    for(let i = 0; i < this.meals.length; i++) {
      const meal = this.meals[i];
      this.macrosOverview.protein += meal.macros.protein;
      this.macrosOverview.carbs += meal.macros.carbs;
      this.macrosOverview.fats += meal.macros.fats;
      this.totalCalories += meal.calories;
    }
  }
}
