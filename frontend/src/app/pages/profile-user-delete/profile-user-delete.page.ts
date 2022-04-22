import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-user-delete',
  templateUrl: './profile-user-delete.page.html',
  styleUrls: ['./profile-user-delete.page.scss'],
})
export class ProfileUserDeletePage implements OnInit {
  username = localStorage.getItem('username');
  
  constructor(
    private router: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController, 
    public navCtrl: NavController,
    ) {}
    
    ngOnInit() {}
    
    password: string;
    
    async deleteUser(){
      const alert = await this.alertController.create({
        header: 'Delete Account',
        message: 'Are you sure?',
        buttons: [
          {
            text: 'No',
            handler: () => {            
            }
          }, {
            text: 'Yes',
            handler: () => {
              
              fetch('https://popcorntasters-api.herokuapp.com/users/' + this.username, {
              method: 'DELETE',
              headers: new Headers({
                // Encabezados
                'Content-Type': 'application/json',
              }),
              body: JSON.stringify({
                username: this.username,
              }),
            })
            .then((response) => {
              console.log(response);
              console.log('Account eliminated...');
              localStorage.removeItem('loggedin');
              this.router.navigate(['/login']);
              return response.json();
            })
            .then((r) => {
              console.log(r);
            })
            .catch((e) => console.log(e));
          }
        }
      ]
    });    
    await alert.present();
    
  }
}
