import {Component, OnDestroy, OnInit} from '@angular/core';
import {File} from '@ionic-native/file/ngx';
import {HttpClient} from '@angular/common/http';

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
  constructor(private http: HttpClient) { }

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

  onDisplayOverlay(img: string) {
    this.overlayImage = img;
  }

  onSaveImage() {
    this.http.get(this.overlayImage, { responseType: 'blob' })
      .subscribe(res => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result;

          this.saveImageToGallery(base64data.toString(), 'fit_keeper_workout');
        };

        reader.readAsDataURL(res);
      });
  }

  private saveImageToGallery(dataURI: string, filename: string) {
    const canvas = document.createElement('canvas');
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const a = document.createElement('a');
      a.download = filename;
      a.href = canvas.toDataURL();
      a.click();
    };
    img.src = dataURI;
  }
}
