import {Injectable} from '@angular/core';
import {Preferences} from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private readonly favouritesKey = "FAVOURITES";

  constructor() {
    this.initiate();
  }

  private initiate() {
    this.fetchFavourites().then(async value => {
      if (!value) {
        await Preferences.set({key: this.favouritesKey, value: "[]"});
      }
    });
  }

  public async addFoodToFavourites(name: string) {
    let favourites = await this.fetchFavourites();
    favourites.push(name);
    await Preferences.set({key: this.favouritesKey, value: JSON.stringify(favourites)});
  }

  public async removeFoodFromFavourites(name: string) {
    let favourites = await this.fetchFavourites();
    let foodIndex = favourites.indexOf(name);
    console.log(foodIndex);

    if (foodIndex > -1 && favourites.length === 1) {
      favourites = [];
    }

    await Preferences.set({key: this.favouritesKey, value: JSON.stringify(favourites)});
  }

  public async fetchFavourites(): Promise<string[]> {
    let {value} = await Preferences.get({key: this.favouritesKey});
    return JSON.parse(value);
  }

  public async checkIfFavourite(name: string): Promise<boolean> {
    return await this.fetchFavourites()[name];
  }
}
