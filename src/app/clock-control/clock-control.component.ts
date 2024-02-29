import { Component } from '@angular/core';

@Component({
  selector: 'app-clock-control',
  standalone: true,
  imports: [],
  templateUrl: './clock-control.component.html',
  styleUrl: './clock-control.component.scss'
})
export class ClockControlComponent {
  public hour: number = 0;
  public minute: number = 0;
}
