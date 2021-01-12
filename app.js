process.env.NODE_ENV === 'development' &&
    require('dotenv').config()

const express = require('express')
const router = require('./routes')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log('Listen to ',PORT);
})