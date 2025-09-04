import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  titlePart1 = signal('Welcome to My First Angular App');
  titlePart2 = ' - A Journey into Angular';
}
