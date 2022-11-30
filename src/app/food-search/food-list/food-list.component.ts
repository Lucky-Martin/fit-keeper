import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FavouritesService} from '../favourites/favourites.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  @Input() foodList: string[];
  @Output() foodSelected: EventEmitter<string> = new EventEmitter<string>();
  favourites: string[] = [];

  constructor(private favouritesService: FavouritesService) {
    this.fetchFavourites();
  }

  ngOnInit() {
  }

  private fetchFavourites() {
    this.favouritesService.fetchFavourites().then(value => {
      this.favourites = value;
    });
  }

  checkIfFavourite(food: string) {
    return this.favourites.indexOf(food) > -1;
  }

  addToFavourites(food: string) {
    this.favouritesService.addFoodToFavourites(food);
  }

  selected(item: string) {
    this.foodSelected.emit(item);
  }
}
