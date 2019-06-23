const express = require('express')
const path = require('path')
const app = express()
let loginHandle = require('./server/loginHandle')

app.use(express.static(path.join(__dirname, '')))

// 允许跨域访问
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

// 处理post请求，进行统一验证
loginHandle(app)

app.listen(8080, () => {
  console.log(`App listening at port 8080`)
})
