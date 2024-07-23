import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RenklendirDirective } from './renklendir.directive';
import { ValidateDirective } from './validate.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RenklendirDirective, ValidateDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
