import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  count = signal(0);
  results = signal<string[]>([]);
  
  // COMPUTED METODU
  countPlus = computed(() => this.count());

  // EFFECT METODU
  countEffect = effect(() => console.log(this.count() + "--> Değişti"));

  increment(){

    // SET YÖNTEMİ
    // this.count.set(0);                   ---> YÖNTEM-1
    // this.count.set(this.count() + 1);    ---> YÖNTEM-2

    // UPDATE YÖNTEMİ
    // this.count.update((oldValue) => { return oldValue + 1; })    ---> YÖNTEM-1
    // this.count.update((oldValue) => oldValue + 1);               ---> YÖNTEM-2

    // MUTATE YÖNTEMİ
    // this.count.mutate((oldValue) => oldValue + 1);

    // Listeyi Update Yöntemi ile Güncelleme
    // this.results.update((oldValue) => [...oldValue, 'Increment']);

    // Listeyi Mutate Yöntemi ile Güncelleme
    // this.count.mutate((oldValue: string[]) => oldValue.push("Increment"));

    this.count.update((old) => old + 1);
    this.results.update((old) => [...old, 'Increment']);
    
  }

  decrement(){
    this.count.update((old) => { return old - 1; });
    this.results.update((oldValue) => [...oldValue, 'Decrement']);
  }

}
