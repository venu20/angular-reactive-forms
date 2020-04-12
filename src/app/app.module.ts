import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoReactiveFormsComponent } from './demo-reactive-forms/demo-reactive-forms.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, DemoReactiveFormsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
