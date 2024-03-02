import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output()
  hourEmitter = new EventEmitter<number>();
  @Output()
  minuteEmitter = new EventEmitter<number>();
  public hour: number = 0;
  public minute: number = 0;
  public displayHour: string = '00';
  public displayMinute: string = '00';

  public onSelectHour(event: any): void {
    const newHour = Number(event?.target?.value);
    if (newHour && newHour >= 0 && newHour <= 12) {
      this.hour = newHour;
      this.updateUIValues();
    }
  }

  public onSelectMinute(event: any): void {
    const newMinute = Number(event?.target?.value);
    if (newMinute && newMinute >= 0 && newMinute <= 55) {
      this.minute = newMinute;
      this.updateUIValues();
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
    this.updateUIValues();
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
    this.updateUIValues();
  }

  private getDisplayFormat(num: number): string {
    return num <= 9 ? `0${num.toString()}` : num.toString();
  }

  private updateUIValues(): void {
    this.displayMinute = this.getDisplayFormat(this.minute);
    this.displayHour = this.getDisplayFormat(this.hour);
    this.sendHourChangeToParent(this.hour);
    this.sendMinuteChangeToParent(this.minute);
  }

  private sendHourChangeToParent(newHour: number): void {
    this.hourEmitter.emit(newHour);
  }
  private sendMinuteChangeToParent(newMinute: number): void {
    this.minuteEmitter.emit(newMinute);
  }
}
