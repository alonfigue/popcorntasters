import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-user-edit',
  templateUrl: './profile-user-edit.page.html',
  styleUrls: ['./profile-user-edit.page.scss'],
})
export class ProfileUserEditPage implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  old_username = localStorage.getItem('username');
  username: string;
  name: string;
  password: string;

  editUser() {
    const usernameA = this.old_username;
    const username = this.username;
    const name = this.name;
    const password = this.password;

    fetch('https://popcorntasters-api.herokuapp.com/users/' + usernameA, {
      method: 'PUT',
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
        console.log('Account edited...');
        localStorage.setItem('username', this.username);
        this.router.navigate(['/menu/main']);
        return response.json();
      })
      .then((r) => {
        console.log(r);
      })
      .catch((e) => console.log(e));
  }
}
