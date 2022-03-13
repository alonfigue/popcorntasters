var express = require('express');
var router = express.Router();
const dotenv = require('dotenv');
var Movie = require('../models/movie');
const db = require('../helpers/db.js');
const api = require('../helpers/api.js');

var router = express.Router();

router.get('/', async (req, res)=>{

  res.send('movies route');
})

router.get('/top20', async (req, res)=>{

  r = await Movie.find({ category: "top20" })
  res.send(JSON.stringify(r));
})

router.get('/:title', async (req, res)=>{

  movie_title = req.params.title;

  r = await Movie.find({ title: { "$regex": movie_title, "$options": "i" } })
  res.send(JSON.stringify(r));
})

router.get('/:title/:id', async (req, res)=>{

  movie_id = req.params.id;

  r = await Movie.find({ id: movie_id })
  res.send(JSON.stringify(r));
})

module.exports = router;