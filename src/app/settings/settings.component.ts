import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {Preferences} from '@capacitor/preferences';
import {Router} from '@angular/router';
import {UserService} from '../setup/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  modalOpen = false;
  editSettingId = '';

  constructor(private alertController: AlertController,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {}

  openEditSettingModal(settingId: string) {
    this.editSettingId = settingId;
    this.modalOpen = true;
  }

  closeSettingModal() {
    this.modalOpen = false;
    this.editSettingId = '';
  }

  async logoutUser() {
    const alert = await this.alertController.create({
      header: 'Изход от профила?',
      message: 'Това действие ще ви изкара от вашия потребителски профил.',
      buttons: [
        {
          text: 'Затвори',
          role: 'cancel'
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: async () => {
            this.userService.userLogged = false;
            this.userService.userLoggedStatus.next(false);
            localStorage.clear();

            this.router.navigate(['/auth'], {queryParams: {
                authMode: 'login'
              }}).then(async () => {
              location.reload();
            });
          },
        },
      ],
    });

    await alert.present();
  }
}
