const path = require('path');

module.exports = function(app){

  app.get('api/friends', function(req, res) {
    res.sendFile(path.join(__dirname, "/app/data/friends.js"))
  });
}



