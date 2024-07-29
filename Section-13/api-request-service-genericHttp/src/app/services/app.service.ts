import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { GenericHttpService } from './generic-http.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private _http: GenericHttpService,
    private _err: ErrorService
  ) {}

  get(callBack: (res: any) => void){
    this._http.get("todos", res => callBack(res));
  }

  add(model: any, callBack: (res: any) => void){
    this._http.post("todos", model, res => callBack(res));
  }

}
