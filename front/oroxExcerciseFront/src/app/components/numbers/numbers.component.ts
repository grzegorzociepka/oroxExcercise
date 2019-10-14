import { Component, OnInit } from '@angular/core';
import { NumberService } from 'src/app/services/number.service';
import { Observable, interval, timer } from 'rxjs';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit{

  ActualNumber = 0;
  
  ngOnInit(){
    const numbers = timer(1000,1000);
    numbers.subscribe(x => this.ActualNumber++);
  }

  constructor(private numberService: NumberService) { }

  async getRandomNumber() {

    const randomNumber = await this.numberService.getNumber();
    const dt = new Date();
    const secs = dt.getSeconds() + (60 * (dt.getMinutes() + (60 * dt.getHours())));
    this.ActualNumber = randomNumber + secs;
  }
}
