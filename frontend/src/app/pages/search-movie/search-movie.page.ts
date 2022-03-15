import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.page.html',
  styleUrls: ['./search-movie.page.scss'],
})
export class SearchMoviePage implements OnInit {

  searchTerm: string;
  movieS = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<any>('http://localhost:3000/movies/')
    .subscribe((res) => {
      console.log(res);
      this.movieS = res;
      console.log(this.movieS);
    });

  }

}
