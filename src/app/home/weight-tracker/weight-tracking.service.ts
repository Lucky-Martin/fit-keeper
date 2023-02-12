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
    const parsedRecords = weightRecords.value ? JSON.parse(weightRecords.value) : [];

    parsedRecords.sort((a, b) => {
      const da = new Date(a.date);
      const db = new Date(b.date);

      if (da < db) {
        return -1;
      } else {
        return 1;
      }

      return 0;
    });

    parsedRecords.forEach(record => {
      const date = new Date(record.date).toISOString().split('T')[0];
      record.date = date;
    });

    return parsedRecords;
  }
}
