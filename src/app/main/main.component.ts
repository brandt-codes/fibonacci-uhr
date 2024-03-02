import { Component } from '@angular/core';
import { ClockComponent } from '../clock/clock.component';
import { ClockControlComponent } from '../clock-control/clock-control.component';

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

  public receiveHourChange(newHour: number): void {
    this.outputHour = newHour;
  }
  public receiveMinuteChange(newMinute: number): void {
    this.outputMinute = newMinute;
  }
}
