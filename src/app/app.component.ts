import { Component } from '@angular/core';
import { Donuts, Result } from './Donuts';
import { DonutAPIService } from './donut-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Donuts';
  donuts:Donuts = {} as Donuts;
  selectedDonut:Result = {} as Result;
  constructor(private donutAPI : DonutAPIService){
    this.donutAPI.getDonuts().subscribe(
      (result) => {
        this.donuts = result; 
      }
    )
  }

  getDonutResult(id:number){
    this.donutAPI.getDonutById(id).subscribe(
      (result) => {
        this.selectedDonut = result;
      }
    )
  }
}
