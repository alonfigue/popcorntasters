import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-movie',
  templateUrl: './profile-movie.page.html',
  styleUrls: ['./profile-movie.page.scss'],
})
export class ProfileMoviePage implements OnInit {
  //creating property
  profileId: string;
  movie;
  comment = [];

  //instantiating
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http
      .get<any>(
        'https://popcorntasters-api.herokuapp.com/movies/details/' +
          this.profileId
      )
      .subscribe((res) => {
        this.movie = res.details;
        this.comment = res.comments;
        //console.log(this.movie)

        console.log(res);
      });
  }
}
