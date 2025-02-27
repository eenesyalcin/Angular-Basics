import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from './components/a/a.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service';
}
