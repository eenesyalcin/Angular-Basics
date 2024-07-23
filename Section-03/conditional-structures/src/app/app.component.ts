import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  showFirstText: boolean = false;
  showSecondText: boolean = false;

  show(num: number){
    if(num === 1){
      this.showFirstText = true;
      this.showSecondText = false;
    }else{
      this.showFirstText = false;
      this.showSecondText = true;
    }


    switch (num) {
      case 1:
        this.showFirstText = true;
        this.showSecondText = false;
        break;
      case 2:
        this.showFirstText = false;
        this.showSecondText = true;
        break;
    }
  }

}
