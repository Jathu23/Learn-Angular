import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
inputcarname: string ='';
@Output() carAdded = new EventEmitter<string>();
users : any= []

onSumit() {
this.carAdded.emit(this.inputcarname);
this.inputcarname = '';
}

myForm = new FormGroup({

  username: new FormControl('userName'), 
  email: new FormControl('eMail') 
});


onSubmit() {
  console.log(this.myForm.value);

let user = {
  name : this.myForm.value.username,
  email :this.myForm.value.email
}
  this.users.push(user)
  this.myForm.reset();
}

}
