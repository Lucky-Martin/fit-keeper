import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FavouritesService } from 'src/app/food-search/favourites/favourites.service';

@Component({
  selector: 'app-favourites-card',
  templateUrl: './favourites-card.component.html',
  styleUrls: ['./favourites-card.component.scss'],
})
export class FavouritesCardComponent implements OnInit {
  @Output() addFood: EventEmitter<string> = new EventEmitter<string>();
  favourites: string[];

  constructor(private favouritesService: FavouritesService) { }

  async ngOnInit() {
    this.favourites = await this.favouritesService.fetchFavourites();
  }

  addFavouriteFood(food: string) {
    this.addFood.emit(food);
  }

}
