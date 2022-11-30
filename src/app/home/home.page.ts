import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CustomFoodModalComponent } from './tracker/custom-food-modal/custom-food-modal.component';
import { Food, Macros } from './tracker/food.model';
import { TrackingService } from './tracker/tracking.service';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  macros: Macros;
  username: string;

  constructor(private trackingService: TrackingService,
              private userService: UserService) {
    this.trackingService.GetMacrosAsObservable().subscribe((value: Macros) => {
      this.macros = value;
    });
    this.userService.fetchUser().then(value => {
      this.username = value.name;
    });
  }

  ngOnInit(): void {
    this.macros = this.trackingService.GetMacros();
  }
}
