import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular001';
  one_way = '1-way-binding';
  two_way = '2-way-binding';
  imageurl ="https://picsum.photos/100";
  imagealt ="img from picsum";
carNames : string[] = [];


  user: any = {
    name : 'John',
    age : 25
  }
  car : any = null;

  
  showname() {
    return "hi";
  }

  oncarAdded(carName:string) {
  if (carName !='') {
    this.carNames.push(carName);
  }
 
    }
 

  // ngOnint(){
  //   this.car  = {
  //     name : "porsh"
  //   }

  // }

}
