var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/routes.js");
app.use('/', routes); // '/', 


app.listen(PORT, function() {
	// Log (server-side) when our server has started
	console.log("Server listening on: http://localhost:" + PORT);
  });