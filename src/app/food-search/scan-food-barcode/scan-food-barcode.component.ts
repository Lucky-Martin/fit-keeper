import { Component, OnInit } from '@angular/core';
import {BarcodeScanner} from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-scan-food-barcode',
  templateUrl: './scan-food-barcode.component.html',
  styleUrls: ['./scan-food-barcode.component.scss'],
})
export class ScanFoodBarcodeComponent implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() { }

  async scanBarcode() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      alert(barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
