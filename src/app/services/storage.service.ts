import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveHour(hour: number): void {
    localStorage.setItem('fib-hour', hour.toString());
  }

  public saveMinute(minute: number): void {
    localStorage.setItem('fib-minute', minute.toString());
  }

  public getHour(): number {
    const hourFromStore = Number(localStorage.getItem('fib-hour'));
    const castedNumber = Number(hourFromStore);
    if (!isNaN(castedNumber) && castedNumber >= 0 && castedNumber <= 12) {
      return castedNumber;
    } else {
      return 0;
    }
  }

  public getMinute(): number {
    const minuteFromStore = Number(localStorage.getItem('fib-minute'));
    const castedNumber = Number(minuteFromStore);
    if (!isNaN(castedNumber) && castedNumber >= 0 && castedNumber <= 55) {
      return castedNumber;
    } else {
      return 0;
    }
  }
}
