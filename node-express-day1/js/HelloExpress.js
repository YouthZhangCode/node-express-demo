var express = require('express')
var app = express()
var path = require('path')
var url = require('url')

app.use(express.static(path.join(__dirname, 'view')))

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html')
})


// 首页 —— 广告（超值特惠）
var homeAdData = require('./mock/home/ad.js')
app.get('/api/homead', (req, res) => {
  console.log('首页 —— 广告（超值特惠）');
  res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
  res.end(JSON.stringify(homeAdData))
});

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./mock/home/list.js')
app.get('/api/homelist/', (req, res) => {

  // var query = url.parse(req.url).query

  console.log('首页 —— 推荐列表（猜你喜欢）')

  // 参数
  // const paramsCity = query.city
  // const paramsPage = query.page
  //
  // console.log('当前城市：' + paramsCity)
  // console.log('当前页数：' + paramsPage)

  res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
  res.end(JSON.stringify(homeListData))
});

// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./mock/search/list.js')
app.get('/api/search/', function (req, res) {
  console.log('搜索结果页 - 搜索结果')

  // 参数
  // const params = this.params
  // const paramsPage = params.page
  // const paramsCity = params.city
  // const paramsCategory = params.category
  // const paramsKeyword = params.keyword
  //
  // console.log('当前页数：' + paramsPage)
  // console.log('当前城市：' + paramsCity)
  // console.log('当前类别：' + paramsCategory)
  // console.log('关键字：' + paramsKeyword)

  res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
  res.end(JSON.stringify(searchListData))
})
// 搜索结果页 - 搜索结果 - 两个参数
// app.get('/api/search/:page/:city/:category', function (req, res) {
//   console.log('搜索结果页 - 搜索结果')
//
//   // 参数
//   const params = this.params
//   const paramsPage = params.page
//   const paramsCity = params.city
//   const paramsCategory = params.category
//
//   console.log('当前页数：' + paramsPage)
//   console.log('当前城市：' + paramsCity)
//   console.log('当前类别：' + paramsCategory)
//   res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
//   res.end(JSON.stringify(searchListData))
// })

// 详情页 - 商户信息
const detailInfo = require('./mock/detail/info.js')
app.get('/api/detail/info/', function (req, res) {
  console.log('详情页 - 商户信息')

  // const params = this.params
  // const id = params.id
  // console.log('商户id: ' + id)

  res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
  res.end(JSON.stringify(detailInfo))
})
// 详情页 - 用户评论
const detailComment = require('./mock/detail/comment.js')
app.get('/api/detail/comment/', function(req, res) {
  console.log('详情页 - 用户点评')

  // const params = this.params
  // const page = params.page
  // const id = params.id
  // console.log('商户id: ' + id)
  // console.log('当前页数: ' + page)

  res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
  res.end(JSON.stringify(detailComment))
})

// 订单列表
const orderList = require('./mock/orderlist/orderList.js')
app.get('/api/orderlist/', function(req, res) {
  console.log('订单列表')

  // const params = this.params
  // const username = params.username
  // console.log('用户名：' + username)

  res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
  res.end(JSON.stringify(orderList))
})

// 提交评论
app.post('/api/submitComment', function (req, res) {
  console.log('提交评论')

  // 获取参数

  let result = {
    errno: 0,
    msg: 'ok'
  }
  res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
  res.end(JSON.stringify(result))
})



var server = app.listen(80, () => {
  var host = server.address().address
  var port = server.address().port

  console.log('应用实例，访问地址为 http:%s%s', host, port)
})
