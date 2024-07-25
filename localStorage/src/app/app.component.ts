import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor() {
    localStorage.setItem("token-1", "value-1");
    localStorage.setItem("token-2", "value-2");
    localStorage.setItem("token-3", "value-3");
    console.log(localStorage.getItem("token-1"))
    localStorage.removeItem("token-2");
    localStorage.clear();    
  }

}
