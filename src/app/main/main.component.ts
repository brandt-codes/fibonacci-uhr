import { Component } from '@angular/core';
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
export class MainComponent {

  public outputHour: number = 0;
  public outputMinute: number = 0;

  constructor(private storageService: StorageService) {
  }

  public receiveHourChange(newHour: number): void {
    this.outputHour = newHour;
    this.saveHour();
  }
  public receiveMinuteChange(newMinute: number): void {
    this.outputMinute = newMinute;
    this.saveMinute();
  }

  private saveHour(): void {
    this.storageService.saveHour(this.outputHour);
  }

  private saveMinute(): void {
    this.storageService.saveMinute(this.outputMinute);
  }
}
