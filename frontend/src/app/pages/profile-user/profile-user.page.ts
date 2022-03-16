import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.page.html',
  styleUrls: ['./profile-user.page.scss'],
})
export class ProfileUserPage implements OnInit {

  person;
  username:string;

  constructor(private route: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   console.log(this.username = this.activatedRoute.snapshot.paramMap.get('username'))  

   /* this.http.get<any>("http://localhost:3000/users/" + this.username) 
    .subscribe((res) => {
      this.person = res;
      //console.log(this.movie)
      
      console.log(res)
    });*/
  }

  editP(){

    //this.route.navigate(['/profile-user-edit/']);

  }

  deleteA(){

  }



}
