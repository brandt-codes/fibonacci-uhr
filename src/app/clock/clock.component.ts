import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ClockElementComponent } from './clock-element/clock-element.component';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [
    ClockElementComponent
  ],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent implements OnChanges {
  @Input()
  public inputHour: number = 0;
  @Input()
  public inputMinute: number = 0;
  public activeHourMap:Map<string, boolean> = new Map();
  public activeMinuteMap:Map<string, boolean> = new Map();
  private numberToBoxMap: Map<number, string[]> = new Map([
    [0, [""]],    // 0 hour or 0 minute
    [1, ["1.1"]], // 1 hour or 5 minute
    [2, ["2"]],   // 2 hour or 10 minute
    [3, ["3"]],   // 3 hour or 15 minute
    [4, ["3", "1.1"]],   // 4 hour or 20 minute
    [5, ["5"]],   // 5 hour or 25 minute
    [6, ["5", "1.1"]],    // 6 hour or 30 minute
    [7, ["5", "2"]],    // 7 hour or 35 minute
    [8, ["5", "3"]],    // 8 hour or 40 minute
    [9, ["5", "3", "1.1"]],    // 9 hour or 45 minute
    [10, ["5", "3", "2"]],    // 10 hour or 50 minute
    [11, ["5", "3", "2", "1.1"]],    // 11 hour or 55 minute
    [12, ["5", "3", "2", "1.1", "1.2"]], // 12 hours 60 minutes (what only makes sense without "minutes")
  ]);

  ngOnChanges(changes: SimpleChanges) {
    this.setHour(this.inputHour);
    this.setMinute(this.inputMinute);
  }

  public setHour(hour: number): void {
    this.activeHourMap.clear();
    this.setMappings(hour, true);
  }

  public setMinute(minute: number): void {
    const preparedMinute = minute / 5; // Reason: we multiply all Minute with 5 when reading the time
    this.activeMinuteMap.clear();
    this.setMappings(preparedMinute, false);
  }

  private setMappings(value: number, isHour: boolean): void {
    if (value >= 0 && value <= 12) {
      const activeFields = this.numberToBoxMap.get(value);
      activeFields?.forEach(field => {
        isHour ? this.activeHourMap.set(field, true) : this.activeMinuteMap.set(field, true);
      })
    }
  }
}
