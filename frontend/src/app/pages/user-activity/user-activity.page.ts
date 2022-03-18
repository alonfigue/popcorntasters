import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.page.html',
  styleUrls: ['./user-activity.page.scss'],
})
export class UserActivityPage implements OnInit {

  comments = [];
  username = localStorage.getItem('username');
  ratings = [];
  
  constructor(
    private route: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
    ) {}
    
    ngOnInit() {
      this.http
      .get<any>(
        'https://popcorntasters-api.herokuapp.com/users/' +
        this.username +
        '/comments'
        )
        .subscribe((res) => {
          console.log(res);
          this.comments = res;
        });
        
        this.http
        .get<any>(
          'https://popcorntasters-api.herokuapp.com/users/' +
          this.username +
          '/ratings'
          )
          .subscribe((res) => {
            console.log(res);
            this.ratings = res;
          });
        }
      }
      