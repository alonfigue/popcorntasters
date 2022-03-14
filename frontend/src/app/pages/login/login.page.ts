import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(private router: Router) { }
  
  ngOnInit() {
  }
  
  username:string;
  password:string;
  
  login(){
    
    const username = this.username;
    const password = this.password;  
    
    console.log(username, password);
    
    fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: new Headers({
      // Encabezados
      'Content-Type': 'application/json'
    }),   
    body: JSON.stringify(
      {    
        "username": username,
        "password": password
      })
      
    }).then(response=>{
      if(response.ok) {
        console.log('Datos ingresados correctos...');
        console.log(response);
        this.router.navigate(['/main']);
        //flag
        localStorage.setItem('loggedin', 'true')
        return response.json()     
      }else{
        throw "Datos ingresados incorrectos..." 
      }

    }).then(r =>{
      console.log(r);
    }).catch(e => console.log(e))
    
  }
}