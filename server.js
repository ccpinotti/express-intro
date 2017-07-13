// server.js
  // SERVER-SIDE JAVASCRIPT
  var express = require('express');
  var app = express();
  var albums = [
    {
      title: 'Cupid Deluxe',
      artist: 'Blood Orange'
    },
    {
      title: 'M3LL155X - EP',
      artist: 'FKA twigs'
    },
    {
      title: 'Fake History',
      artist: 'letlive.'
    }
  ];

  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  // this codes is utilizing var app to use express and to create a path for request and response
  app.get('/', function (req, res) {
    // once req is recvieved and the response Hello World is sent back
    console.log(req);
    console.log(res);
    res.send('Hello World!');
  });
  app.get('/api/albums', function (req, res) {
    res.json(albums)
  })
  // this line of code is listening for an external server or local server
  app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening at http://localhost:3000/');
  });
