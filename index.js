const express = require('express')
const router = require('./controller/router')

const app = express()
//设置模板引擎
app.set('view engine', 'ejs')
//静态路由中间件
app.use('/public', express.static('./public'))

app.get("/", router.showIndex)

app.listen(3000)