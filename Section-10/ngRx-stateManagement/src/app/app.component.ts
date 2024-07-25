import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MyCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  count$: Observable<number>
  count: number = 0;

  constructor(
    private store: Store<{count: number}>
  ) {
    this.count$ = this.store.select("count");

    // Bu yöntem daha çok API isteklerinde veya uygulamada bir değere bağlı kalıp onu takip etmek amaçlı kullanılır.
    this.store.select("count").subscribe(res => {
      this.count = res;
    })
  }

}
