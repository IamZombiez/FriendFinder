//Requires
const path = require('path');

var bodyParser = require('body-parser')

var express = require('express')
var app = express()

var PORT = 3000
 
app.listen(PORT)

 // data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);


