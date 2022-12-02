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

  async resetUserSettings() {
    const alert = await this.alertController.create({
      header: 'Delete user data?',
      message: 'This action will delete all user data and reset the application',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: async () => {
            this.router.navigate(['/setup']).then(async () => {
              await Preferences.clear();
              await this.userService.resetUser();
              this.userService.userLoggedStatus.next(false);
              location.reload();
            });
          },
        },
      ],
    });

    await alert.present();
  }
}
