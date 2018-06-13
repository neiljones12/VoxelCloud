var express  = require('express');
var app      = express(); 								
var port  	 = process.env.PORT || 5000; 				

app.use(express.static(__dirname + '/client')); 		// statics
require('./server/routes.js')(app);						// routes

app.listen(port);
console.log("Web server listening on port " + port);
