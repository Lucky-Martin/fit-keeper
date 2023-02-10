import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {WeightTrackingService} from './weight-tracking.service';
import {ModalController} from '@ionic/angular';
import {AddWeightRecordModalComponent} from './add-weight-record-modal/add-weight-record-modal.component';

@Component({
  selector: 'app-weight-tracker',
  templateUrl: './weight-tracker.component.html',
  styleUrls: ['./weight-tracker.component.scss'],
})
export class WeightTrackerComponent implements AfterViewInit {
  @ViewChild('graph') private graphRef: ElementRef;
  weightData = [
    { date: '01.01.2022', weight: 75 },
    { date: '2022-01-15', weight: 78 },
    { date: '2022-02-01', weight: 76 },
    { date: '2022-03-01', weight: 74 },
    { date: '2022-04-01', weight: 72 }
  ];
  chart;

  constructor(private weightTrackingService: WeightTrackingService, private modalController: ModalController) {
  }

  ngAfterViewInit() {
    this.weightTrackingService.getWeightRecords().then(data => {
      const weightData = data.map(record => record.weight);
      const weightDates = data.map(record => record.date);
      this.displayTracker(weightData, weightDates);
    });
  }

  async onAddWeightRecord() {
    const modal = await this.modalController.create({
          component: AddWeightRecordModalComponent,
          componentProps: {}
    });

    await modal.present();

    const {data, role} = await modal.onWillDismiss();

    if (role === 'confirm') {
      await this.addWeightRecord(data.date, data.weight);
    }
  }

  private displayTracker(weights, dates) {
    this.chart = new Chart(this.graphRef.nativeElement, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: 'Weight',
          data: weights,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
                display: false
          }
        }
      }
    });
  }

  private async addWeightRecord(date: string, weight: number) {
    await this.weightTrackingService.addWeightRecord(weight, date);

    this.chart.data.labels.push(date);
    this.chart.data.datasets[0].data.push(weight);
    this.chart.data.labels.sort((a, b) => {
      const da = new Date(a.date);
      const db = new Date(b.date);

      if (da < db) {
        return -1;
      } else {
        return 1;
      }
    });

    this.chart.update();
  }
}
