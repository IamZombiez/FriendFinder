//Requires
const path = require('path');

var bodyParser = require('body-parser')

var express = require('express')
var app = express()
 
app.listen(3000)

 // data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, "/public/home.html"));
});
 
 app.get('/survey', function (req, res) {
  res.sendFile(path.join(__dirname, "/public/survey.html"));
});


//  app.post("/api/new", function(req, res) {
//   var newcharacter = req.body;
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
//   console.log(newcharacter);
//   characters.push(newcharacter);
//   res.json(newcharacter);
// });


app.get("/api/:characters?", function(req, res) {
  var chosen = req.params.characters;
  if (chosen) {
    console.log(chosen);
    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
    return res.json(false);
  }
  return res.json(characters);
});




// build a switch?