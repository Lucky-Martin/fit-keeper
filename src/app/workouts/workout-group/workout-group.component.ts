import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-group',
  templateUrl: './workout-group.component.html',
  styleUrls: ['./workout-group.component.scss'],
})
export class WorkoutGroupComponent implements OnInit {
  @Input() groupName: string;
  @Input() images: string[];
  @Input() slideOptions;

  constructor() { }

  ngOnInit() {}

}
