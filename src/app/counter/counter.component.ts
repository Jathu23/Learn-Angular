import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent {
  clickcount = 0;
   vechiles =["car","van","bus","bike"]
   visable = true;
setRed = true;
  incrementCount() {
    this.clickcount++;
     }
     decrementCount() {
      this.clickcount--;
       }
}
