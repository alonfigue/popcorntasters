import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  
  i = 0;
  top20 = [];
  
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.http
    .get<any>('https://popcorntasters-api.herokuapp.com/movies/top20')
    .subscribe((res) => {
      this.top20 = res;
    });
  }
}
