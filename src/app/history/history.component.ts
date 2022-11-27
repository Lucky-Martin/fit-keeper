import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  date: Date = new Date();
  day: string;
  selectingDay: boolean;

  constructor() { }

  ngOnInit() {
    this.day = new Date().toDateString();
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
