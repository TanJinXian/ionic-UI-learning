import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-office',
  templateUrl: 'office.html',
})
export class OfficePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // console.log("Office page constructor");

    let username = this.navParams.get("username");
    console.log(username);
  }

  gotoHome() {
    this.navCtrl.pop();
  }

  rest() {
    this.navCtrl.setRoot(HomePage);
  }
  

}
