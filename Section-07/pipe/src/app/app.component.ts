import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FruitPipe } from './fruit.pipe';
import { NamePipe } from './name.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, FruitPipe, NamePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  name: string = " Enes";
  work: string = "";
  fruits: string[] = ["Elma", "Armut", "Erik"];
  search: string = "";

  save(){
    this.fruits.push(this.work);
    this.work = "";
  }

}
