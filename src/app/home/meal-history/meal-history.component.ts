import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {TrackingService} from '../tracker/tracking.service';

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
    this.trackingService.getMacrosAsObservable().subscribe(this.updateGraph.bind(this));
  }

  async ngAfterViewInit() {
    let calories = await this.calculateCaloriesForDay();

    this.graph = new Chart(this.graphRef.nativeElement, {
      type: 'bar',
      data: {
        labels: ['ПОН', 'ВТО', 'СРЯ', 'ЧЕТ', 'ПЕТ', 'СЪБ', 'НЕД'],
        datasets: [{
          label: 'KCAL',
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

  private async calculateCaloriesForDay(): Promise<number[]> {
    const mealHistory = await this.trackingService.fetchMealHistory();
    const current = new Date();
    const calories: number[] = [];

    const week = [];
    if (current.toLocaleString().includes('Sun')) {
      current.setDate(current.getDate() - 6);
    }

    for (let i = 0; i < 7; i++) {
      week.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    for(let i = 0; i < this.daysInAWeek; i++) {

      const dateString = week[i].toDateString();

      if (mealHistory[dateString]) {
        let caloriesForDay = 0;
        for(let j = 0; j < mealHistory[dateString].length; j++) {
          caloriesForDay += mealHistory[dateString][j].calories;
        }

        calories.push(Math.round(caloriesForDay));
      } else {
        calories.push(0);
      }
    }

    return calories;
  }

  private async updateGraph() {
    const calories = await this.calculateCaloriesForDay();

    this.graph.data.datasets[0].data = null;
    this.graph.data.datasets[0].data = calories;
    this.graph.update();
  }
}
