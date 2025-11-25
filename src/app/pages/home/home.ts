import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,             // Must be true for standalone
  templateUrl: './home.html',   // Your HTML file
  styleUrls: ['./home.css']
})
export class Home {}
