const fetch = require('node-fetch');
const api_key = "k_c6lgeg7d";
const Movie = require('../models/movie');
const db = require('./db.js');

const movies_list = " "

//https://imdb-api.com/API/SearchMovie/k_c6lgeg7d/Uncharted

const movies_by_title = async (title) => {

    fetch('https://imdb-api.com/API/SearchMovie/'+api_key+'/'+title,{
    method: 'GET',
  
}).then(response=>{
  return response.json()
}).then(r =>{
  console.log(r);
  console.log(r.expression)
  
  first_movie = r.results[1];
  console.log(first_movie);

  array = r.results

  for (i in r.results){
   console.log(r.results[i].image);
  }

  r.results.forEach(movie => {
      console.log(movie.title);
      console.log(movie.image);
  })
}).catch(e => console.log(e))
}

async function popular_movies() {
  var movies = [Movie];

  fetch('https://imdb-api.com/en/API/MostPopularMovies/'+api_key,{
  method: 'GET',

}).then(response=>{
return response.json()
}).then(r =>{

for (let i = 0 ; i < 20; i++){
 
 console.log(r.items[i].id);
 //console.log(r.items[i].title);
 //console.log(r.items[i].image);
 //console.log(r.items[i].year);
 //console.log(r.items[i].imDbRating);

 db.create_top20(r.items[i].id, r.items[i].title, r.items[i].image, r.items[i].year, r.items[i].imDbRating, "top20")
 /*var movie = new Movie({
  id: r.items[i].id,
  title: r.items[i].title,
  image: r.items[i].image,
  rating: r.items[i].imDbRating,
  year: r.items[i].year,
})

movies.push(movie);
*/
}
//console.log(movies);
//return movies;
//console.log(movies);

}).catch(e => console.log(e))
} 

const movie_by_gender = "";

const hello = async () => {
  hellowi = "hola";
  return hellowi;
}

async function test(){
    //await movies_by_title("Batman");
    //top20 = popular_movies().then(result => {console.log(result)});
    popular_movies();
    //hello().then(result => console.log(result));

    //popular_movies().then(result => {console.log(result)});
  }

  //test()
module.exports = movies_by_title, popular_movies;

/*
const movie_by_title = async (title) => {
   
    fetch('https://imdb-api.com/API/SearchMovie/'+api_key+'/'+title,{
    method: 'GET',
    headers: new Headers({
  // Encabezados
 'Content-Type': 'application/json'
  }),
    body: JSON.stringify(
  {
  "firstname": firstname,
  "secondname": secondname,
  "username": username,
  "pass": pass,
  "cpass": cpass
  })
  
}).then(response=>{
  console.log(response);
  if (response.redirected == true)
  {
    window.location.replace(response.url)
  }
  return response.json()
}).then(r =>{
  console.log(r);
}).catch(e => console.log(e))

}*/