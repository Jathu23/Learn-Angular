import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit ,DoCheck {
  
@Input() Items = [];
@Input() text = '';
changes ='';
message = "";
text2 = '';
defaulttext ="hello";

  ngOnChanges(changes: SimpleChanges): void {
  if (changes['Items']) {
    console.log("Items property changed",changes['Items']);  
  }
  if (changes['text']) {
    console.log("text property changed",changes['text']);
    this.changes= changes['text'].previousValue;
  }
  }

  ngOnInit(): void {
   this.message= "ng OnInit works";
  }
  ngDoCheck(): void {
    // console.log("value changed");
    if (this.defaulttext == this.text2) {
      console.log("match input to default text");
      
    }
    
  }

}

