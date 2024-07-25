import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoAddComponent } from './todo-add/todo-add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  todos: string[] = [];

  add(event: string){
    this.todos.push(event);
  }

}
