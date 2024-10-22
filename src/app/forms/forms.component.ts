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

onSumit() {
this.carAdded.emit(this.inputcarname);
this.inputcarname = '';
}

myForm = new FormGroup({
  username: new FormControl('khk')  // Empty default value
});

}
