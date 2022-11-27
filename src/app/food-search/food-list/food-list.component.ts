import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  @Input() foodList: string[];
  @Output() foodSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  checkIfFavourite(food: string): boolean {
    return false;
  }

  selected(item: string) {
    this.foodSelected.emit(item);
  }
}
