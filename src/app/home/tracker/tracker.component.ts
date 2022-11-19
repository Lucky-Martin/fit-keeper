import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IMacros } from './food.model';
import { TrackingService } from './tracking.service';

Chart.register(...registerables);

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
})
export class TrackerComponent implements AfterViewInit {
  @Input() macros: IMacros;
  @ViewChild('graph') private graphRef: ElementRef;
  graph: Chart;

  constructor(private trackingService: TrackingService) { 
    this.trackingService.GetMacrosAsObservable().subscribe(this.updateChart.bind(this));
  }

  private updateChart() {
    this.graph.data.datasets[0].data.pop();
    this.graph.data.datasets[0].data.pop();

    this.graph.data.datasets[0].data.push(this.trackingService.calories);
    this.graph.data.datasets[0].data.push(this.trackingService.GetCaloriesLeft());

    this.graph.update();
  }

  ngAfterViewInit(): void {
    this.graph = new Chart(this.graphRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Calories Consumed', 'Calories Left'],
        datasets: [{
          label: 'Calories',
          data: [this.trackingService.calories, this.trackingService.GetCaloriesLeft()],
          backgroundColor: [
            '#4DB4D7',
            '#48BF91'
          ],
          hoverBackgroundColor: [
            '#4DB4D7',
            '#48BF91'
          ]
        }]
      }
    });
  }
}
