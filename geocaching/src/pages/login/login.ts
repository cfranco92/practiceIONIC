import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public viewCtrl: ViewController, public authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  loginFacebook() {
    this.authService.loginWithFacebook().then( (response)=> {
      alert('Loggeado con éxito');
      this.viewCtrl.dismiss();
      localStorage.setItem('loginData', JSON.stringify(response))
    });
  }
  cancelar() {
    console.log('Entró')
    this.viewCtrl.dismiss();
  }

}
