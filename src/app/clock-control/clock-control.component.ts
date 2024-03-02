import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clock-control',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './clock-control.component.html',
  styleUrl: './clock-control.component.scss'
})
export class ClockControlComponent {
  public hour: number = 0;
  public minute: number = 0;
  public displayHour: string = '00';
  public displayMinute: string = '00';

  public onSelectHour(event: any): void {
    const newHour = Number(event?.target?.value);
    if (newHour && newHour >= 0 && newHour <= 12) {
      this.hour = newHour;
      this.displayHour = this.getDisplayFormat(newHour);
    }
  }

  public onSelectMinute(event: any): void {
    const newMinute = Number(event?.target?.value);
    if (newMinute && newMinute >= 0 && newMinute <= 55) {
      this.minute = newMinute;
      this.displayMinute = this.getDisplayFormat(newMinute);
    }
  }

  public plus5Minutes(): void {
    if (this.minute < 55) {
      this.minute = this.minute + 5;
    } else {
      this.minute = 0;
      if (this.hour < 12) {
        this.hour++;
      } else {
        this.hour = 0;
      }
    }
    this.updateDisplayValues();
  }

  public minus5Minutes(): void {
    if (this.minute > 0) {
      this.minute = this.minute - 5;
    } else {
      this.minute = 55;
      if (this.hour > 0) {
        this.hour--;
      } else {
        this.hour = 12;
      }
    }
    this.updateDisplayValues();
  }

  private getDisplayFormat(num: number): string {
    return num <= 9 ? `0${num.toString()}` : num.toString();
  }

  private updateDisplayValues(): void {
    this.displayMinute = this.getDisplayFormat(this.minute);
    this.displayHour = this.getDisplayFormat(this.hour);
  }
}
