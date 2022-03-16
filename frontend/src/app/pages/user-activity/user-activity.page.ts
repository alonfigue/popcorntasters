import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.page.html',
  styleUrls: ['./user-activity.page.scss'],
})
export class UserActivityPage implements OnInit {
  
  //ratings = [];
  
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
   /* this.http.get<any>('http://localhost:3000/users/' + rickyd + '/ratings')
    .subscribe((res) => {
      console.log(res);
      this.ratings = res;
      console.log(this.ratings);
    });*/
       
    
    
  }
  
}
