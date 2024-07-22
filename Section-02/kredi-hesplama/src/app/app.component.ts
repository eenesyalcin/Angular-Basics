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
  
  krediTutari: number=0 ;
  taksitSayisi: number = 3;
  taksitler: number[] = [3, 6, 12, 24];
  sonuc: string = "";
  odemePlani: {taksitTutari: number, kalanGeriOdeme: number}[] = [];

  hesapla(){
    debugger
    const taksitTutari: number = (this.krediTutari / this.taksitSayisi) * 1.29;
    let toplamGeriOdeme: number = taksitTutari * this.taksitSayisi;
    this.sonuc = `
      Taksit Tutarı: ${taksitTutari} -
      Taksit Sayısı: ${this.taksitSayisi} -
      Toplam Geri Ödeme: ${toplamGeriOdeme}
    `;

    this.odemePlani = [];
    for (let i = 0; i < this.taksitSayisi; i++) {
      toplamGeriOdeme -= taksitTutari;
      const data = {
        taksitTutari: taksitTutari,
        kalanGeriOdeme: toplamGeriOdeme
      }
      
      this.odemePlani.push(data);
    }
  }
  test(event:any){
    debugger
  }

}
