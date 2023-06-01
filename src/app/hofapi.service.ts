import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HOFAPIService {

  url:string= "https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json";

  constructor(http:HttpClient) { }

 
}
