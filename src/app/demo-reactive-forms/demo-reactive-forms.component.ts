import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

function ValidatePhone(num: AbstractControl) {
  const regex = new RegExp('[0-9]{10}');
  console.log(num.value)
  if (!regex.test(num.value)) {
    return { cell: true };
  }
  return null;
}

@Component({
  selector: 'app-demo-reactive-forms',
  templateUrl: './demo-reactive-forms.component.html',
  styleUrls: ['./demo-reactive-forms.component.css']
})

  
export class DemoReactiveFormsComponent implements OnInit {
  employee: FormGroup;
  constructor(private fb:FormBuilder) { }
  ngOnInit() {
    this.employee = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', ValidatePhone],
      preferred: this.fb.group({
        phone: true,
        email: true
      })
    });
    
  }

  get firstname(){
    return this.employee.get('firstname');
  }
  get lastname(){
    return this.employee.get('lastname');
  }

}