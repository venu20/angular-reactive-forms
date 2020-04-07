import { Component, ViewChildren, Input, OnChanges } from '@angular/core';

class NameForm {
  firstname;
  lastname;
  constructor(firstname="", lastname="") {
    this.firstname = firstname || 'Jhon';
    this.lastname = lastname || 'Doe';
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {
  name = 'Angular';
  formInstance = new NameForm();
  onSubmit(e, a) {
    console.log(a);
  }
}
