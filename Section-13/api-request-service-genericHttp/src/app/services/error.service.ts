import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  errorHandler(err: HttpErrorResponse){
    if(err.status == 404) {
      console.log("API adresine ulaşılamıyor!");
    }
    console.log(err);
  }

}
