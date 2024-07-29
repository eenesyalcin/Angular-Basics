import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

  constructor(
    private _http: HttpClient
  ) {
    this._http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
      complete: () => {
        // API isteğinde hata olsa da olmasa da çalıştırılacak kısım.
      }
    })
  }

}
