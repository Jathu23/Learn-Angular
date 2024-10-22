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
items =[
  {id:1 ,name:"item 1"},
  {id:2 ,name:"item 2"},
  {id:3 ,name:"item 3"}
]
text = "hello";


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
