const express = require('express');
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');
const cors = require('cors');


const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');


mongoose.set('useFindAndModify', false);

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.get('/',  async (req, res)=>{

    res.send(JSON.stringify("animals"));
})

//routes
const user_router = require('./routes/users');
const auth_router = require('./routes/auth');

app.use('/users', user_router);
app.use('/auth', auth_router);


module.exports = app