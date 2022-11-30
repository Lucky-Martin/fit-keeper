import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { TrackingService } from 'src/app/home/tracker/tracking.service';
import { IFetchFoodData } from '../food-response.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  @Output() onClosed: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild("modal") modal: IonModal;
  favourites: IFetchFoodData[] = [];
  open: boolean = true;

  constructor(private trackingService: TrackingService,
              private foodService: FoodService) { }

  async ngOnInit() {
    let favouritesList = await this.trackingService.fetchFavourites() || [];

    for(let i = 0; i < favouritesList.length; i++) {
      this.foodService.fetchFoodData(favouritesList[i]).subscribe(food => {
        this.favourites.push(food);
      });
    }
  }

  onAddFood() {
  }

  onClose() {
    this.open = false;
    this.modal.dismiss();
    this.onClosed.emit();
  }
}
