import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../Donuts';

@Component({
  selector: 'app-donut-result',
  templateUrl: './donut-result.component.html',
  styleUrls: ['./donut-result.component.css']
})
export class DonutResultComponent implements OnInit {
  ngOnInit(): void {

  }
  

  @Input() displayDonut:Result = {} as Result;
}


