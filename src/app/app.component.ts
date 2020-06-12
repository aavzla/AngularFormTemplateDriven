import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

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
}
