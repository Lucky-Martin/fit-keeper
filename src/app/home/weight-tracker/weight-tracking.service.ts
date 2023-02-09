import { Injectable } from '@angular/core';
import {Preferences} from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class WeightTrackingService {

  async addWeightRecord(weight: number, date: string) {
    const weightRecords = await this.getWeightRecords();
    weightRecords.push({ weight, date });
    await Preferences.set({ key: 'weightRecords', value: JSON.stringify(weightRecords) });
  }

  async getWeightRecords() {
    const weightRecords = await Preferences.get({ key: 'weightRecords' });
    return weightRecords.value ? JSON.parse(weightRecords.value) : [];
  }
}
