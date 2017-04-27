const path = require('path');

var friend = require("../app/data/friends.js")

module.exports = function(app){

  app.get('api/friends', function(req, res) {
    rest.json(friend);
  });
};





