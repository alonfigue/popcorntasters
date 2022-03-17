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
  /* profileId: string;
  movie;
  comment= [];
  */
  constructor(
    private router: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  usernameA: string;
  username: string;
  name: string;
  password: string;

  editUser() {
    /* this.profileId = this.activatedRoute.snapshot.paramMap.get("id");    
    this.http.get<any>("http://localhost:3000/movies/details/" + this.profileId)
    .subscribe((res) => {
      this.movie = res.details;
      this.comment = res.comments;
      //console.log(this.movie)
      
      console.log(res)*/

    const usernameA = this.usernameA;
    const username = this.username;
    const name = this.name;
    const password = this.password;

    fetch('https://popcorntasters-api.herokuapp.com/users/' + this.usernameA, {
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
        this.router.navigate(['/menu/main']);
        return response.json();
      })
      .then((r) => {
        console.log(r);
      })
      .catch((e) => console.log(e));

    //var p = document.createElement("p");
    //cont1.appendChild(p);
    //p.innerHTML = "Succesfully updated";
  }
}
