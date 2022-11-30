import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TrackingService } from 'src/app/home/tracker/tracking.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  @Input() foodList: string[];
  @Output() foodSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor(private trackingService: TrackingService) { }

  ngOnInit() {}

  async checkIfFavourite(food: string): Promise<boolean> {
    return await this.trackingService.checkIfFavourite(food);
  }

  addToFavourites(food: string) {
    this.trackingService.addFoodToFavourites(food);
  }

  selected(item: string) {
    this.foodSelected.emit(item);
  }
}
