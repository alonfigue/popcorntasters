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
  ratinga = [];
  
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
          this.ratinga = res.ratings; // check this
          
          console.log(res);
        });
      }
      
      movie_id: string;
      description: string;
      username: string;
      
      id: string;
      user: string;
      rating: number;
      
      
      
      
      addComment() {
        
        const username = this.username;
        const movie_id = this.movie_id;
        const description = this.description;   
        
        
        
        fetch('https://popcorntasters-api.herokuapp.com/movies/comment/' + this.movie_id, {
        method: 'POST',
        headers: new Headers({
          // Encabezados
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          username: username,
          movie_id: movie_id,
          description: description
        }),
      })
      .then((response) => {
        console.log(response);
        if (response.redirected == true) {
          window.location.replace(response.url);
        }
        console.log('New comment created...');
        return response.json();
      })
      .then((r) => {
        console.log(r);
      })
      .catch((e) => console.log(e));    
      
      
      window.location.reload();
    }
    
    
    addRating() {
      
      const user = this.user;
      const id = this.id;     
      const rating = this.rating;
      
      
      fetch('https://popcorntasters-api.herokuapp.com/users/' + this.user + '/ratings', {
      method: 'POST',
      headers: new Headers({
        // Encabezados
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        user: user,   
        movie_id: id,
        rating: rating
      }),
    })
    .then((response) => {
      console.log(response);
      if (response.redirected == true) {
        window.location.replace(response.url);
      }
      console.log('New comment added...');
      return response.json();
    })
    .then((r) => {
      console.log(r);
    })
    .catch((e) => console.log(e));
    
    
    
    
    
    
    window.location.reload();
    
  }
  
}
