import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutComponent, ContactComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  helloWorld: string = "Hello, World from TS!";

  pClassName1: string = "red";
  pClassName2: string = "blue";

  text: string = "Two-Way Data Binding";

  clickMe(){
    alert("BENİ TIKLADIN...");
  }

  changeHelloWorldVariable(event: any){
    this.helloWorld = event.target.value;
  }

  setPElementClass(){
    return "green";
  }
}
