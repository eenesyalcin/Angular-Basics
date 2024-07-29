import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

  model: {
    id: number,
    title: string,
    completed: boolean,
    userId: number
  } = {
    id: 0,
    title: "",
    completed: false,
    userId: 1
  }
  
  constructor(
    private _http: HttpClient
  ) {}

  save(){
    this._http.post("https://jsonplaceholder.typicode.com/todos", this.model).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }

}
