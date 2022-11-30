import {Component, OnInit} from '@angular/core';
import {TrackingService} from '../home/tracker/tracking.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  date: Date = new Date();
  day: string;
  selectingDay: boolean;

  constructor(private trackingService: TrackingService) { }

  ngOnInit() {
    this.day = new Date().toDateString();
  }

  onDateSelected(event) {
    const date = event.detail.value;
    this.trackingService.setDay(new Date(date));
    this.day = date.toDateString();
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
        const tommorow = this.date.getDate() + 1;
        this.date = new Date(this.date.setDate(tommorow));
        this.day = this.date.toDateString();
        break;
      default:

        break;
    }
  }

}
