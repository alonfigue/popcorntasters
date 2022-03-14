import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  
  movies = [];
  
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.http.get('http://localhost:3000/movies/top20')
    .subscribe((res) => {
      console.log(res)
    });
  }
  
}