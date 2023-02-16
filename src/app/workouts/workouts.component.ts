import {Component, OnDestroy, OnInit} from '@angular/core';
import {File} from '@ionic-native/file/ngx';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})
export class WorkoutsComponent implements OnInit, OnDestroy {
  slideOpts = {
    scrollbar: true,
    slidesPerView: 2
  };
  overlayImage: string;
  file: File;
  constructor() { }
  ngOnInit() {
    if (window.screen.width < 768) {
      this.slideOpts.slidesPerView = 1.2;
    }
  }

  ngOnDestroy() {
    this.closeOverlay();
  }

  closeOverlay() {
    this.overlayImage = null;
  }

  onSaveImage() {
    // this.file.create
  }

  onDisplayOverlay(img: string) {
    this.overlayImage = img;
  }
}
