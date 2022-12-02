import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})
export class WorkoutsComponent implements OnInit {
  slideOpts = {
    scrollbar: true,
    slidesPerView: 2
  }

  constructor() { }

  ngOnInit() {}

}
