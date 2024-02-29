import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-clock-element',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './clock-element.component.html',
  styleUrl: './clock-element.component.scss'
})
export class ClockElementComponent implements OnChanges {

  @Input()
  public isHourSet: boolean = false;
  @Input()
  public isMinuteSet: boolean = false;
  @Input()
  public colorHour: string = '#ff0000';
  @Input()
  public colorMinute: string = '#0000ff';
  @Input()
  public colorCombined: string = '#00ff00';

  public calculatedColor: string = '#ffffff';


  public ngOnChanges(changes: SimpleChanges): void {
    if (this.isHourSet && !this.isMinuteSet) {
      this.calculatedColor = this.colorHour;
    } else if (!this.isHourSet && this.isMinuteSet) {
      this.calculatedColor = this.colorMinute;
    } else if (this.isHourSet && this.isMinuteSet) {
      this.calculatedColor = this.colorCombined;
    }
  }
}
