import { Component } from '@angular/core';
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
export class ClockComponent {

}
