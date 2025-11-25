import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { LocationStrategy, HashLocationStrategy}  from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class App {
  protected readonly title = signal('my-resume-angular');
}
