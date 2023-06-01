import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donuts, Result } from './Donuts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutAPIService {
  url:string = "https://grandcircusco.github.io/demo-apis/donuts"
  constructor(private http:HttpClient) { }

  getDonuts():Observable<Donuts>{
    return this.http.get<Donuts>(this.url + ".json");
  }

  getDonutById(id:number){
    return this.http.get<Result>(this.url + "/" + id + ".json" )
  }
}
