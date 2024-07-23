import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  todos: TodoModel[] = [
    {work: "Example 1", isCompleted: true},
    {work: "Example 2", isCompleted: true},
    {work: "Example 3", isCompleted: true}
  ]

  constructor() {
    this.save();
  }

  save(){
    console.log("---------- For Döngüsü ----------");
    for(let i = 0; i < 10; i++){
      console.log(i);
    }

    console.log("---------- Listeyi For ile Dönme ----------");
    for (let i = 0; i < this.todos.length; i++) {
      console.log(this.todos[i].work);
    }

    console.log("---------- Listeyi Foreach ile Dönme ----------");
    this.todos.forEach((val) => {
      console.log(val.work);
      console.log(val.isCompleted);
    })

    console.log("---------- Listeyi For of ile Dönme ----------");
    // asenkron
    for(let data of this.todos){
      console.log(data.work);
      console.log(data.isCompleted);
    }

    console.log("---------- Listeyi For in ile Dönme ----------");
    for(let index in this.todos){
      console.log(this.todos[index].work);
      console.log(this.todos[index].isCompleted);
    }
  }
}

export class TodoModel{
  work: string = "";
  isCompleted: boolean = false;
}