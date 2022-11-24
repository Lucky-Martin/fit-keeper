import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { IMacros } from '../tracker/food.model';
import { TrackingService } from '../tracker/tracking.service';

@Component({
  selector: 'app-meal-history',
  templateUrl: './meal-history.component.html',
  styleUrls: ['./meal-history.component.scss'],
})
export class MealHistoryComponent implements AfterViewInit {
  private readonly daysInAWeek = 7;
  @ViewChild('graph') private graphRef: ElementRef;
  graph: Chart;
  
  constructor(private trackingService: TrackingService) {
    this.trackingService.GetMacrosAsObservable().subscribe(this.updateGraph.bind(this));
  } 

  private calculateCalories(macros: IMacros): number {
    let calories = 0;
    calories += macros.protein * 4;
    calories += macros.carbs * 4;
    calories += macros.fats * 9;

    return calories;
  }

  private async updateGraph() {
    console.log("update grapg");
    
    const mealHistory = await this.trackingService.fetchMealHistory();
    const weekStart = this.trackingService.getMondayOfWeek();
    const calories: number[] = [];

    for(let i = 0; i < this.daysInAWeek; i++) {
      const nextDay = new Date();
      nextDay.setDate(weekStart.getDate() + i);
      const dateString = nextDay.toDateString();

      if (mealHistory[dateString]) {
        let caloriesForDay: number = 0;
        for(let j = 0; j < mealHistory[dateString].length; j++) {
          caloriesForDay += this.calculateCalories(mealHistory[dateString][j].macros);
        }
        
        calories.push(caloriesForDay);
      } else {
        calories.push(0);
      }
    }

    console.log(calories);
    
    this.graph.data.datasets[0].data = null;
    this.graph.data.datasets[0].data = calories;
    this.graph.update();
  }

  async ngAfterViewInit() {
    const mealHistory = await this.trackingService.fetchMealHistory();
    const weekStart = this.trackingService.getMondayOfWeek();
    const calories: number[] = [];

    for(let i = 0; i < this.daysInAWeek; i++) {
      const nextDay = new Date();
      nextDay.setDate(weekStart.getDate() + i);
      const dateString = nextDay.toDateString();

      if (mealHistory[dateString]) {
        let caloriesForDay: number = 0;
        for(let j = 0; j < mealHistory[dateString].length; j++) {
          caloriesForDay += this.calculateCalories(mealHistory[dateString][j].macros);
        }
        
        calories.push(caloriesForDay);
      } else {
        calories.push(0);
      }
    }

    this.graph = new Chart(this.graphRef.nativeElement, {
      type: 'bar',
      data: {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'Day',
          data: calories,
          backgroundColor: [
            '#ffffff'
          ]
        }]
      },
      options: {
        scales: {
          x: {
            ticks: {
              color: "#ffffff",
              font: {
                family: "OpenSans"
              }
            },
            grid: {
              display: false
            }
          },
          y: {
            ticks: {
              color: "#ffffff",
              font: {
                family: "OpenSans"
              }
            },
            grid: {
              display: false
            }
          }
        }
      }
    });

    this.graph.config.options.color = "#ffffff";
  }
}