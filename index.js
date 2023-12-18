require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
app.listen(PORT,() => {
    console.log("server listing on",PORT)
})

app.get('/',(req,res) => {
    res.send("Hello world")
})


app.get('/twitter',(req,res) => {
    res.send("Hello Twiiter")
})