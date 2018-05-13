var express = require('express')
var app = express()
var path = require('path')

app.use(express.static(path.join(__dirname, 'view')))
// app.use(express.static('view'))

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html')
})

var server = app.listen(8094, () => {
  var host = server.address().address
  var port = server.address().port

  console.log('应用实例，访问地址为 http:%s%s', host, port)
})
