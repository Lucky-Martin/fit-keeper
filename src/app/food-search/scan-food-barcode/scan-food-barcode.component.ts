import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
@Component({
  selector: 'app-scan-food-barcode',
  templateUrl: './scan-food-barcode.component.html',
  styleUrls: ['./scan-food-barcode.component.scss'],
})
export class ScanFoodBarcodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  async scanBarcode() {
    await BarcodeScanner.checkPermission({ force: true });

    BarcodeScanner.hideBackground();
    document.querySelector('body').classList.add('scanner-active');

    const result = await BarcodeScanner.startScan();

    if (result.hasContent) {
      document.querySelector('body').classList.remove('scanner-active');
      console.log(result.content);
    }
  }
}
