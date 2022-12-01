import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Chart, registerables} from 'chart.js';
import {IMacros} from './food.model';
import {TrackingService} from './tracking.service';

Chart.register(...registerables);
Chart.defaults.color = "#000";

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
})
export class TrackerComponent implements AfterViewInit {
  @Input() macros: IMacros;
  @ViewChild('graph') private graphRef: ElementRef;
  graph: Chart;
  caloriesLeft: number = 0;

  constructor(public trackingService: TrackingService) {
    this.trackingService.getMacrosAsObservable().subscribe(this.updateChart.bind(this));
    this.trackingService.getCaloriesLeft().then(value => {
      this.caloriesLeft = value;
    });
  }

  private async updateChart() {
    this.caloriesLeft = await this.trackingService.getCaloriesLeft();

    this.graph.data.datasets[0].data.pop();
    this.graph.data.datasets[0].data.pop();

    this.graph.data.datasets[0].data.push(this.trackingService.calories);
    this.graph.data.datasets[0].data.push(this.caloriesLeft);

    this.graph.update();
  }

  async ngAfterViewInit() {
    this.caloriesLeft = await this.trackingService.getCaloriesLeft();
    
    this.graph = new Chart(this.graphRef.nativeElement, {
      type: 'doughnut',
      options: {
        animation: {
          animateScale: false
        }
      },
      data: {
        labels: ['Calories Consumed', 'Calories Left'],
        datasets: [{
          label: 'Calories',
          data: [Math.round(this.trackingService.calories), Math.round(this.caloriesLeft)],
          backgroundColor: [
            '#802E11',
            '#E76B3F'
          ],
        }]
      }
    });
  }
}
