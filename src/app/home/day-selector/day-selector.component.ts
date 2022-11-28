import { Component, OnInit } from '@angular/core';
import { TrackingService } from '../tracker/tracking.service';

@Component({
  selector: 'app-day-selector',
  templateUrl: './day-selector.component.html',
  styleUrls: ['./day-selector.component.scss'],
})
export class DaySelectorComponent implements OnInit {
  daySelected: string;

  constructor(private trackingService: TrackingService) { }

  async ngOnInit() {
    this.daySelected = (new Date(await this.trackingService.fetchCurrentDay()).getDay() - 1).toString();
  }

  onDaySelected() {
    const mondayDate = this.trackingService.getMondayOfWeek();
    const dayOfWeek = new Date();
    dayOfWeek.setDate(mondayDate.getDate() + Number(this.daySelected));
    
    this.trackingService.SetDay(dayOfWeek);
  }
}
