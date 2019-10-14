import { Component, OnInit } from '@angular/core';
import { NumberService } from 'src/app/services/number.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent {

  ActualNumber = 0;

  constructor(private numberService:NumberService) { }
  
  async getRandomNumber(){
    this.ActualNumber = await this.numberService.getNumber();
  }
}
