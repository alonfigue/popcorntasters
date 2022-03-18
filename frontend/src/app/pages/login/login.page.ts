import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router) {}
  
  ngOnInit() {}
  
  username: string;
  password: string;
  
  login() {
    
    const username = this.username;
    const password = this.password;
    
    fetch('https://popcorntasters-api.herokuapp.com/auth/login', {
    method: 'POST',
    headers: new Headers({
      // Encabezados
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw 'The user does not exists or the data does not matches...';
    }
  })
  .then((r) => {
    console.log(r);
    localStorage.setItem('loggedin', 'true');
    localStorage.setItem('username', this.username);
    
    this.router.navigate(['/menu/main']);
  })
  .catch((e) => console.log(e));
}
}
