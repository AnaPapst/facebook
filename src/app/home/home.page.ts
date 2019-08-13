import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:any = {};
  
  constructor(public navCtrl: NavController, private fb: Facebook) {}
  loginFb(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        if(res.status === 'connected'){
          this.user.img = "https://graph.facebook.com/" + res.authResponse.userID + "/picture?type=square";
          
        } else {
          alert('Login failed');
        }
        console.log('Logged into Facebook!', res)
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }
}
