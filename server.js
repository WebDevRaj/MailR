var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var flash = require("connect-flash");

//configuration


// config files
var db = require("./config/db");


//set our port
var port = process.env.PORT || 8080;

//connect to mongoDB database
//mongoose.connect(db.url);

//get all data/stuff of body (POST) parameters
// parse applicaiton/json

app.use(bodyParser.json());

//parse application/vnd.api+json as json
app.use(bodyParser.json({ type:"application/vnd.api+json"}));

//parse applicationn/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//override with the     X-HTTP-Method_override headerr in the request. simulate DELET/PUSH
app.use(methodOverride("X-HTTP-Method_override"));

//set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

//use flash
app.use(flash());

//routes =========================================
require('./app/routes')(app);  //configure our routes

//start app ======
//startup our app at localhost:8080
app.listen(port, function(){
    console.log("Server started!");
});

//expose app
exports = module.exports = app;