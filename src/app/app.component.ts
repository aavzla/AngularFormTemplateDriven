import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: false }) form: NgForm;
  defaultQuestion: string = 'pet';
  answer: string;
  genders = ['male', 'female'];
  socialMedias = [
    { name: 'twitter', checked: true },
    { name: 'youtube', checked: false },
    { name: 'facebook', checked: true },
    { name: 'instagram', checked: false }
  ];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    questionAnswer: '',
    gender: '',
    twitter: false,
    youtube: false,
    facebook: false,
    instagram: false
  };

  suggestUserName() {
    const suggestedName = 'Superuser';

    /*
     * This approach allow to charge all values of the form,
     * but if the user already filled some info, it will override that info.
     * Here, we are forced to pass all the form group complete (all fields with values).
    */
    /*
    this.form.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male',
      socialMedia: {
        twitter: false,
        youtube: false,
        facebook: true,
        instagram: false
      }
    });
    */

    //This approach will fill or replace only the username, as needed.
    //Here, this.form represents the ViewChild property. It is the overall ngForm object that acts as a container of your form.
    //And the second '.form' represents the form group inside the ngForm container.
    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
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
    /*
    console.log(this.constructor.name + " - Submitted!");
    console.log(this.constructor.name + ' - This is the form', this.form);
    console.log(this.constructor.name + ' - Here are the JS object of form.value', this.form.value);
    console.log(this.constructor.name + ' - Form username value is ' + this.form.value.username);
    console.log(this.constructor.name + ' - Form email value is ' + this.form.value.email);
    console.log(this.constructor.name + ' - Form secret value is ' + this.form.value.secret);
    console.log(this.constructor.name + ' - Form question answer value is ' + this.form.value.questionAnswer);
    */

    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.secretQuestion = this.form.value.secret;
    this.user.questionAnswer = this.form.value.questionAnswer;
    this.user.gender = this.form.value.gender;
    this.user.twitter = this.form.value.socialMedia.twitter;
    this.user.youtube = this.form.value.socialMedia.youtube;
    this.user.facebook = this.form.value.socialMedia.facebook;
    this.user.instagram = this.form.value.socialMedia.instagram;

    //Here, we can reset the form to the default values.
    this.form.reset();

    //Here, we can reset the form with a specific default values as we want it.
    /*
    console.log('the form before the reset', this.form.value);
    console.log('the form pristine status', this.form.pristine);
    console.log('the form untouched status', this.form.untouched);
    this.form.reset({
      userData: {
        username: '',
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: '',
      socialMedia: {
        twitter: false,
        youtube: false,
        facebook: true,
        instagram: false
      }
    });
    console.log('the form after the reset', this.form.value);
    console.log('the form pristine status', this.form.pristine);
    console.log('the form untouched status', this.form.untouched);
    */
  }
}

