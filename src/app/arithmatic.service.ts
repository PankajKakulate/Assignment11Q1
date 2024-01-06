import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  constructor() { }

  public addition(No1 : number,No2 : number ):number{
    return No1 + No2;
  }

  public substration(No1 : number,No2 : number ):number{
    return No1 - No2;
  }
}
