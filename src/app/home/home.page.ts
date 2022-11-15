import { Component, OnInit, EventEmitter } from '@angular/core';
import { Macros } from './tracker/food.model';
import { TrackingService } from './tracker/tracking.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  openModal: EventEmitter<void> = new EventEmitter<void>();
  macros: Macros;

  constructor(private trackingService: TrackingService) {
    this.trackingService.GetMacrosAsObservable().subscribe((value: Macros) => {
      this.macros = value;
    });
  }

  ngOnInit(): void {
    this.macros = this.trackingService.GetMacros();
  }

  onAddCustomFood(): void {
    this.openModal.emit();
  }
}
