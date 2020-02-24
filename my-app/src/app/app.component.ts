import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  hide = true;
  errorMessage: string;
  flag = false;
  array = [];

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
    console.log('Form on init: ', this.form);
    console.log('Array on init: ', this.array);
  }
  checkErrors() {
    if (this.form.value.email === '' || this.form.value.password === '') {
      return this.errorMessage = '';
    } else if (this.form.invalid) {
      return this.errorMessage = 'Please fill all fields correctly!';
    }
  }
  submit() {
     if (this.form.valid) {
      const formData = {...this.form.value};
      this.array.push(formData);
      console.log('Form on submit: ', this.form);
      console.log('Array on submit: ', this.array);
      this.flag = true;
      this.resetForm();
    } else {
      return;
    }
  }
  resetForm() {
    this.form.reset({
      email: '',
      password: ''
    });
    console.log('Form on reset: ', this.form);
  }
}
