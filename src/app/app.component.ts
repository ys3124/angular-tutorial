import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  // templateUrl: './app.component.html',
  template: '<h1>Hello World!</h1>',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'homes';
}
