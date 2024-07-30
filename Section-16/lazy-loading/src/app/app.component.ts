import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { C3Component } from './components/c3/c3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, C1Component, C2Component, C3Component, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
