import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <p>Hello world from the template!</p>
    <router-outlet />
  `,
  styles: [
    `
      p {
        font-size: 14px;
        color: gray;
        background-color: #f0f0f0;
        padding: 10px;
        border-radius: 5px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'my-first-ng-app';
}
