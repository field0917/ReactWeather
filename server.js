var express = require('express');

//creat our app
var app = express();

app.use(express.static('public'));

//start the server
app.listen(3000, function() {
  console.log('Express server is up on port 3000');
});
