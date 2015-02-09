var express = require('express')
var app = express()

app.use('/libs', express.static(__dirname + '/../libs/'));
app.use('/docs', express.static(__dirname + '/../docs/'));
app.use(express.static(__dirname + '/../projects/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/pages/index.html');
})

var server = app.listen(8080, function () {

  var host = 'localhost'
  var port = server.address().port

  console.log('Emperor Engine is running in http://%s:%s', host, port)

})