import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, interval, timer, fromEvent, combineLatest } from 'rxjs';
import { NumberService } from 'app/services/number.service';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})

export class NumbersComponent implements AfterViewInit {

  @ViewChild('input',{static: false}) button: ElementRef;
  actualNumber : Observable<number>;
  
  ngAfterViewInit (){
    const secs = timer(1000,1000).pipe(map(() => {
      const dt = new Date();
     return dt.getSeconds() + (60 * (dt.getMinutes() + (60 * dt.getHours())));
    }));
    const random = fromEvent(this.button.nativeElement,'click').pipe(mergeMap(() => {
        return this.numberService.getNumber();
    }));

    const numbers = timer(1000,1000);
    this.actualNumber = combineLatest(random,secs).pipe(map(([x,y])=>{
        return x + y;
    }));
  }

  constructor(private numberService: NumberService) { }
}
