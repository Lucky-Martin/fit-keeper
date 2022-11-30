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

  addToFavourites(food: string) {
    this.favouritesService.addFoodToFavourites(food).then(() => {
      this.fetchFavourites();
    });
  }

  removeFromFavourites(food: string) {
    this.favouritesService.removeFoodFromFavourites(food).then(() => {
      console.log('here');
      this.fetchFavourites();
    });
  }

  selected(item: string) {
    this.foodSelected.emit(item);
  }

  private fetchFavourites() {
    this.favouritesService.fetchFavourites().then(value => {
      this.favourites = value;
    });
  }
}
