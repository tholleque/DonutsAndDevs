import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complete } from './HallOfFame';

@Injectable({
  providedIn: 'root'
})
export class HOFAPIService {

  url:string= "https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json";

  constructor(private http:HttpClient) { }

 getDevs():Observable<Complete>{
  return this.http.get<Complete>(this.url);
 }
 
}
