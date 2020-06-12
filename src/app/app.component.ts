import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: false }) form: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  /*
  //Here we pass the form as a parameter.
  onSubmit(
    //The HTMLFormELement is the native element of a local reference.
    //form: HTMLFormElement
    form: NgForm
  ) {
    console.log(this.constructor.name + " - Submitted!");
    console.log(this.constructor.name + ' - This is the form', form);
    console.log(this.constructor.name + ' - Here are the JS object of form.value', form.value);
    console.log(this.constructor.name + ' - Form username value is ' + form.value.username);
    console.log(this.constructor.name + ' - Form email value is ' + form.value.email);
    console.log(this.constructor.name + ' - Form secret value is ' + form.value.secret);
  }
  */


  //Here we pass the form with @ViewChild.
  //This allow us to get access to the form earlier than when it is submitted. (validations, etc.)
  onSubmit() {
    console.log(this.constructor.name + " - Submitted!");
    console.log(this.constructor.name + ' - This is the form', this.form);
    console.log(this.constructor.name + ' - Here are the JS object of form.value', this.form.value);
    console.log(this.constructor.name + ' - Form username value is ' + this.form.value.username);
    console.log(this.constructor.name + ' - Form email value is ' + this.form.value.email);
    console.log(this.constructor.name + ' - Form secret value is ' + this.form.value.secret);
  }
}

