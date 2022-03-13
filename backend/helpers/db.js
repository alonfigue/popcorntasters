
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/user');
const Movie = require('../models/movie');
const Comment = require('../models/comment');

dotenv.config({ path: '../.env'});

const PORT = process.env.PORT || 3000;

const dbURI = process.env.MONGO_URI;

/*
mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(result => {
    console.log("connected to db");

})
.catch((err) => console.log(err));
*/

async function create_movie(id, title, image, year, rating ){
    
    const movie = new Movie({
        id: id,
        title: title,
        image: image,
        year: year,
        rating: rating,
     })
     await movie.save().then(result =>{
         console.log(result);
         //res.send(JSON.stringify(result));
     }).catch(err => console.log(err)); 
}

async function create_top20(id, title, image, year, rating, category ){
    
    const movie = new Movie({
        id: id,
        title: title,
        image: image,
        year: year,
        rating: rating,
        category: category,
     })
     await movie.save().then(result =>{
         console.log(result);
         //res.send(JSON.stringify(result));
     }).catch(err => console.log(err)); 
}

async function create_comment(movie_id, username, description){
    
    const comment = new Comment({
        movie_id: movie_id,
        username: username,
        description: description,
     })
     await comment.save().then(result =>{
         console.log(result);
         //res.send(JSON.stringify(result));
     }).catch(err => console.log(err)); 
}

async function update_movie(movie_id, description){
try{
    const query = { id: movie_id };

    res = await Movie.findOneAndUpdate(query, {description: description },{
        new: true
      });
    //res.send(JSON.stringify(r));
    console.log(res);
   }catch{(err => console.log(err))
 } 
}

async function get_movie(movie_id){
    try{
        res = await Movie.findOne({id: movie_id})

        //res.send(JSON.stringify(r));
        console.log(res);
        return res;
       }catch{(err => console.log(err))
     } 
}


async function get_comments(movie_id){
    try{
        res = await Comment.find({movie_id: movie_id})

        //res.send(JSON.stringify(r));
        console.log(res);

       }catch{(err => console.log(err))
     } 
}

async function delete_comment(id){
    try{
        res = await Comment.findOneAndDelete({_id: id })
        //res.send(JSON.stringify("Deleted, " +r));
        console.log("deleted: " + res);
       }catch{(err => console.log(err))
    }
}
//delete_comment('622acb0621e93e0a38c46b30');

//create_movie(2, "Jackass", "no image");

//create_comment(1, "rickmuch", "too much time");

//update_movie(1, "I am vengeance");

//get_movie(1);

//get_comments(1);

module.exports = {create_top20, create_movie, update_movie, get_movie, get_comments, create_comment, delete_comment}