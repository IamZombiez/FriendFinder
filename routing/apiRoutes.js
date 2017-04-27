const path = require('path');

var friendData = require("../app/data/friends.js");

console.log(friendData)

module.exports = function(app){

  app.get('api/friends', function(req, res) {
    return res.json(friendData);

  });

};

