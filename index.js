/**
 * Created by apple on 2017/8/25.
 */
const express = require('express')

const app = express()

app.use(express.static('./public'))

app.listen(3000)