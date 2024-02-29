import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbInputDatepicker, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbInputDatepicker],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fibonacci-uhr';

  constructor() {
  }
}
