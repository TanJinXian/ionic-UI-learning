import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ToastController, ActionSheetController,
ModalController } from 'ionic-angular';
import { OfficePage } from "../office/office";
import { ProfilePage } from "../profile/profile";

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

  constructor(public navCtrl: NavController, public loadingController: LoadingController, 
    public alertController: AlertController, public toastController:ToastController,
    public actionsheetController: ActionSheetController, public modalController: ModalController) {

  }

  loading() {
    let loading = this.loadingController.create({
      content: "Loading...",
      spinner: "ios",
      enableBackdropDismiss: true,
      duration: 3000
    });
    loading.present();

    // setTimeout(() => {
    //   loading.dismiss();
    // }, 3000);
  }

  alert() {
    // let alert = this.alertController.create({
    //   title: "Congratulations",
    //   message: "Enter you email address",
    //   inputs: [{
    //     name: "email",
    //     placeholder: "username@gmail.com"
    //   }],
    //   buttons: [{
    //     text: "OK",
    //     handler: (data) => {
    //       console.log(data);
    //     }
    //   }]
    // });

    let alert = this.alertController.create();
    alert.setTitle("Congratulations");

    // alert.addInput({
    //   type: "checkbox",
    //   label: "Send me notifications",
    //   value: "send"
    // });

    // alert.addInput({
    //   type: "checkbox",
    //   label: "Do send me notifications",
    //   value: "dontsend"
    // });

    alert.addInput({
      type: "text",
      placeholder: "Enter you name"
    });

    alert.addInput({
      type: "text",
      placeholder: "Enter you age"
    });
    

    alert.addButton({
      text: "OK",
      handler: (data) => {
        console.log(data);
      }
    });

    alert.present();
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

  toast() {
    let toast = this.toastController.create({
      message: "This is a toast message",
      duration: 3000,
      showCloseButton: true,
      closeButtonText: "OK",
      position: "middle"
    });

    toast.present();
  }

  actionSheet() {
    let actionSheet = this.actionsheetController.create({
      title: "Select an options",
      buttons: [{
        text: "Share with Facebook",
        icon: "logo-facebook",
        handler: () => {
          console.log("share via fb");
        }
      },
      {
        text: "Share with Email",
        icon: "mail",
        handler: () => {
          console.log("share via email");
          return false;
        }
      },
      {
        text: "Cancel",
        role: "cancel",
        icon: "close",
        handler: () => {
          console.log("cancel");
        }
      }
    ]
    });

    actionSheet.present();
  }

  goToOffice() {
    this.navCtrl.push(OfficePage, {username: this.username});
  }

  openModal() {
    let modal = this.modalController.create(ProfilePage, {"username": this.username});

    modal.onDidDismiss((data) => {
      console.log(data);
    })
    modal.present();
  }

}
