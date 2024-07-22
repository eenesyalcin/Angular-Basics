import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  work: string = "";
  todos: string[] = [];
  updateWork: string = "";
  updateIndex: number = 0;
  isUpdateWorkFormActive: boolean = false;

  add(){
    this.todos.push(this.work);
    this.work = "";
  }

  delete(index: number){
    this.todos.splice(index,1);
  }

  get(index: number){
    this.updateIndex = index;
    this.updateWork = this.todos[index];
    this.isUpdateWorkFormActive = true;
  }

  update(){
    this.todos[this.updateIndex] = this.updateWork;
    this.isUpdateWorkFormActive = false;
  }
  
}
