import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  
  i=0;
  top20 = [];
  
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.http.get<any>('http://localhost:3000/movies/top20')
    .subscribe((res) => {
      console.log(res);
      this.top20 = res;
      //console.log(this.top20);
      //this.top20 = a;
      //console.log(this.top20);
    });
  }
  
}