var express = require('express');

var io = require('../lib/io');

var router = express.Router();

io.on('connection', socket => {
  socket.on('disconnect', () => {

  });
});

router.get('/', function(req, res, next) {
  res.send({});
});

module.exports = router;
