import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-movie',
  templateUrl: './profile-movie.page.html',
  styleUrls: ['./profile-movie.page.scss'],
})
export class ProfileMoviePage implements OnInit {
  
  //creating properties
  profileId: string;  
  movie_id: string;
  movie_title: string;
  description: string;
  username = localStorage.getItem('username');
  
  id: string;
  rating: number;
  
  movie;
  comment = [];
  ratinga = [];
  general_rating: number;
  
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
          this.movie_id = res.details.id;
          this.movie_title = res.details.title;
          
          var sum = 0;
          res.ratings.forEach((element) => {
            sum += element.rating;
          });
          
          this.general_rating = sum / res.ratings.length;
          this.general_rating = Math.round(this.general_rating * 10) / 10;
          
          this.movie = res.details;
          this.comment = res.comments;
          this.ratinga = res.ratings; 
          
          console.log(res);
        });
      }
      
      addComment() {
        const description = this.description;
        
        fetch(
          'https://popcorntasters-api.herokuapp.com/movies/comment/' +
          this.movie_id,
          {
            method: 'POST',
            headers: new Headers({
              // Encabezados
              'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
              username: this.username,
              movie_id: this.movie_id,
              description: description,
            }),
          }
          )
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
        }
        
        addRating() {
          const rating = this.rating;
          
          fetch(
            'https://popcorntasters-api.herokuapp.com/users/' +
            this.username +
            '/ratings',
            {
              method: 'POST',
              headers: new Headers({
                // Encabezados
                'Content-Type': 'application/json',
              }),
              body: JSON.stringify({
                username: this.username,
                id: this.movie_id,
                rating: rating,
              }),
            }
            )
            .then((response) => {
              console.log(response);
              if (response.redirected == true) {
                window.location.replace(response.url);
              }
              console.log('New rating added...');
              return response.json();
            })
            .then((r) => {
              console.log(r);
            })
            .catch((e) => console.log(e));
          }
          
          addFav() {
            const rating = this.rating;
            
            fetch(
              'https://popcorntasters-api.herokuapp.com/users/' +
              this.username +
              '/movies',
              {
                method: 'PUT',
                headers: new Headers({
                  // Encabezados
                  'Content-Type': 'application/json',
                }),
                body: JSON.stringify({
                  username: this.username,
                  id: this.movie_id,
                  title: this.movie_title,
                }),
              }
              )
              .then((response) => {
                console.log('Movie added to favorites...');
                return response.json();
              })
              .then((r) => {
                console.log(r);
              })
              .catch((e) => console.log(e));
            }
          }
          