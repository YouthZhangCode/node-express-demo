var express = require('express')
var app = express()

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html')
})

var server = app.listen(8081, () => {
  var host = server.address().address
  var port = server.address().port

  console.log('应用实例，访问地址为 http:%s%s', host, port)
})
