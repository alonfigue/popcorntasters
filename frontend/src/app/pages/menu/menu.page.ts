import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  
  selectedIndex: number = 0;
  username;
  
  pages = [
    // index 0
    {
      title: 'Popular Movies',
      url: '/menu/main',
      icon: 'eye'
    },
    
    //index 1... so on and so forth
    {
      title: 'Search a Movie',
      url: '/search-movie',
      icon: 'search'
    }

  ]
  
  constructor(public alertController: AlertController, public navCtrl: NavController, private route: Router) { }
  
  ngOnInit() {
  }
  
  changeSelectedIndex(i){
    this.selectedIndex = i;    
  }
  

  profile(){
    this.route.navigate(['menu/profile-user/' + this.username]);

  }


  //logout function
  
  async logout(){
    const alert = await this.alertController.create({
      header: 'Log out',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'No',
          handler: () => {            
          }
        }, {
          text: 'Yes',
          handler: () => {
            localStorage.removeItem('loggedin');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });    
    await alert.present();
  }
  
}