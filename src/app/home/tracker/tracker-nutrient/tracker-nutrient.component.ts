import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker-nutrient',
  templateUrl: './tracker-nutrient.component.html',
  styleUrls: ['./tracker-nutrient.component.scss'],
})
export class TrackerNutrientComponent implements OnInit {
  @Input() key: string;
  @Input() value: number;

  constructor() { }

  ngOnInit() {
  }

}
