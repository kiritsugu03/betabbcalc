var express = require('express');

// initialize app (express server) and port variables
var app = express();
var port = process.env.port || 8080;

//app.use(bodyParser.urlencoded({extended : true}));
//app.use(bodyParser.json());

app.use(express.static('public'));
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.listen(port, function(){
    console.log("Server started using port " + port);
});