import { Injectable } from '@angular/core';
import {Preferences} from '@capacitor/preferences';
import {IWeightRecord} from './weight-record.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeightTrackingService {
  updateWeightChartSubject: Subject<null> = new Subject<null>();
  private weightRecordsKey = 'weightRecords';

  async saveWeightRecords(weightRecords: IWeightRecord[]) {
    await Preferences.set({ key: this.weightRecordsKey, value: JSON.stringify(weightRecords) });
  }

  async addWeightRecord(weight: number, date: string) {
    const weightRecords = await this.getWeightRecords();
    weightRecords.push({ weight, date });

    await Preferences.set({ key: this.weightRecordsKey, value: JSON.stringify(weightRecords) });
  }

  async getWeightRecords() {
    const weightRecords = await Preferences.get({ key: this.weightRecordsKey });
    const parsedRecords = weightRecords.value ? JSON.parse(weightRecords.value) : [];

    parsedRecords.sort((a, b) => {
      const da = new Date(a.date);
      const db = new Date(b.date);

      if (da < db) {
        return -1;
      } else {
        return 1;
      }
    });

    parsedRecords.forEach(record => {
      const date = new Date(record.date).toISOString().split('T')[0];
      record.date = date;
    });

    return parsedRecords;
  }
}
