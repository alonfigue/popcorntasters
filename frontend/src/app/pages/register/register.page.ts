import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private router: Router) {}
  
  ngOnInit() {}
  
  username: string;
  name: string;
  password: string;
  
  register() {
    const username = this.username;
    const name = this.name;
    const password = this.password;
    
    fetch('https://popcorntasters-api.herokuapp.com/auth/register', {
    method: 'POST',
    headers: new Headers({
      // Encabezados
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
      username: username,
      name: name,
      password: password,
    }),
  })
  .then((response) => {
    console.log(response);
    if (response.redirected == true) {
      window.location.replace(response.url);
    }
    console.log('New account created...');
    this.router.navigate(['/login']);
    return response.json();
  })
  .then((r) => {
    console.log(r);
  })
  .catch((e) => console.log(e));
}

}
