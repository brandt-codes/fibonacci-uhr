import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveHour(hour: number): void {
    // TODO AVB: TBD
  }

  public saveMinute(minute: number): void {
    // TODO AVB: TBD
  }

  public getHour(): number {
    // TODO AVB: TBD
    return 4;
  }

  public getMinute(): number {
    // TODO AVB: TBD
    return 15;
  }
}
