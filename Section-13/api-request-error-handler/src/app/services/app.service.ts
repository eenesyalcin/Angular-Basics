import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private _http: HttpClient,
    private _err: ErrorService
  ) {}

  get(callBack: (res: any) => void){
    this._http.get("https://jsonplaceholder.typicode.com/todos").subscribe({
      next: (res) => {
        callBack(res);
      },
      error: (err: HttpErrorResponse) => {
        this._err.errorHandler(err);
      }
    });
  }

  add(model: any, callBack: (res: any) => void){
    this._http.post("https://jsonplaceholder.typicode.com/todos", model, {}).subscribe({
      next: (res) => {
        callBack(res);
      },
      error: (err: HttpErrorResponse) => {
        this._err.errorHandler(err);
      }
    });
  }

}
