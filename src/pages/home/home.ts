import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string = "";
  password: string = "";
  userType: any;
  gender: any;
  notification: boolean;

  constructor(public navCtrl: NavController) {

  }

  login() {
    console.log("Hello");

    console.log(this.username);
    console.log(this.password);
    console.log(this.userType);
    console.log(this.gender);
    console.log(this.notification);
  }

  cancel() {
    this.username = "";
    this.password = "";
  }

}
