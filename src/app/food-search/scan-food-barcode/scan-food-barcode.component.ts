import { Component, OnInit } from '@angular/core';
import {BarcodeScanner} from '@awesome-cordova-plugins/barcode-scanner/ngx';
import {BarcodeService, IBarcodeProductData} from './barcode.service';
import {IFetchFoodData} from '../food-response.model';
import {Food} from '../../home/tracker/food.model';
import {AddFoodModalComponent} from '../add-food-modal/add-food-modal.component';
import {ModalController, ToastController} from '@ionic/angular';
import {TrackingService} from '../../home/tracker/tracking.service';

@Component({
  selector: 'app-scan-food-barcode',
  templateUrl: './scan-food-barcode.component.html',
  styleUrls: ['./scan-food-barcode.component.scss'],
})
export class ScanFoodBarcodeComponent implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner,
              private barcodeService: BarcodeService,
              private modalController: ModalController,
              private trackingService: TrackingService,
              private toastController: ToastController) { }

  ngOnInit() { }

  async scanBarcode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.barcodeService.fetchProductData(barcodeData.text).subscribe(async productData => {
        if (!productData.product) {
          await this.displayNotFound();
          return;
        }
        await this.addFood(productData);
      });
    }).catch(err => {
      console.log('Error', err);
    });
  }

  async addFood(foodData: IBarcodeProductData) {
    const food = new Food();
    food.name = foodData.product.product_name;
    food.image = foodData.product.image_front_url;
    food.weight = Number(foodData.product.product_quantity);
    food.macros.protein = foodData.product.nutriments.proteins_serving;
    food.macros.carbs = foodData.product.nutriments.carbohydrates_serving;
    food.macros.fats = foodData.product.nutriments.fat_serving;
    food.calories = foodData.product.nutriments['energy-kcal_serving'];

    const modal = await this.modalController.create({
      component: AddFoodModalComponent,
      componentProps: {food}
    });

    await modal.present();

    const {data, role} = await modal.onWillDismiss();

    if (role === 'confirm') {
      await this.trackingService.addFood(data.food, data.quantity);
    }
  }

  private async displayNotFound() {
    const toast = await this.toastController.create({
      position: 'bottom',
      duration: 3000,
      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel'
        }
      ],
      message: 'Продуктът не е намерен'
    });

    await toast.present();
  }
}
