const express = require('express');
const app = express();

require('dotenv').config();

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/mern')

var router=require('./routes/api')

var bodyParser = require('body-parser')
app.use(bodyParser.json({ type: 'application/json' }))

// const port = process.env.PORT || 5000;
const port = 5000;
app.use('/api', router);

//The code below helps us handle CORS related issues we might face if we try to access our api from a different dormain.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "localhost:3001");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use((err,req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
