import { Component } from '@angular/core';
import { ClockComponent } from '../clock/clock.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ClockComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
