const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//import routes
const postsRoute = require('./routes/posts');

//middleware
app.use('/posts', postsRoute);

//routes
// app.get('/', (req,res)=> {
//   res.send('We are on home');
// });

app.get('/posts', (req,res)=> {
  res.send('We are on posts');
});


//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true }, () => {
  console.log('connected to DB!')
});

//How do we start listening to the server?
app.listen(3000);