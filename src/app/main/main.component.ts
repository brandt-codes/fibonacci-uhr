import { Component, OnInit } from '@angular/core';
import { ClockComponent } from '../clock/clock.component';
import { ClockControlComponent } from '../clock-control/clock-control.component';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ClockComponent,
    ClockControlComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  public outputHour: number = 0;
  public outputMinute: number = 0;

  constructor(private storageService: StorageService) {
  }

  public ngOnInit(): void {
    const initHour = this.storageService.getHour();
    this.onHourChange(initHour, false);
    const initMinute =this.storageService.getMinute();
    this.onMinuteChange(initMinute, false);
  }

  public onHourChange(newHour: number, saveHour: boolean = true): void {
    this.outputHour = newHour;
    if (saveHour) { // reduce one useless cycle (onInit -> load from Storage -> write again)
      this.saveHour();
    }
  }

  public onMinuteChange(newMinute: number, saveMinute: boolean = true): void {
    this.outputMinute = newMinute;
    if (saveMinute) {
      this.saveMinute();
    }
  }

  private saveHour(): void {
    this.storageService.saveHour(this.outputHour);
  }

  private saveMinute(): void {
    this.storageService.saveMinute(this.outputMinute);
  }
}
