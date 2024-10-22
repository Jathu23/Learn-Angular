import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { FormsComponent } from './forms/forms.component';
import { ListComponent } from './list/list.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PipeexampleComponent,
    FormsComponent,
    ListComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
