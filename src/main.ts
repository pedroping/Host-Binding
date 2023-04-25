import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MainModule } from './main.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MainModule],
  template: `
    <app-rainbow-input></app-rainbow-input>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
