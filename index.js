
const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.send("This is the Home Page!")
})

app.get('/about', (req, res)=>{
    res.send('Some Stuff about will go here')
})

app.get('/blog', (req, res)=>{
    res.send('A directory of all my blog posts will go here.')
})

app.listen(8000, ()=>{
    console.log("listening to port 8000")
})
