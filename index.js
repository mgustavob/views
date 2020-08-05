
const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    //res.send("This is the Home Page!")
    res.sendFile(__dirname+'/views/index.html')
    // res.sendFile(`${__dirname}/views/index.html`)
})

app.get('/about', (req, res)=>{
    //res.send('Some Stuff about will go here')
    res.sendFile(__dirname+'/views/about.html')
})

app.get('/blog', (req, res)=>{
    //res.send('A directory of all my blog posts will go here.')
    res.sendFile(__dirname+'/views/blog-directory.html')
})

app.listen(8000, ()=>{
    //console.log("listening to port 8000")
})

//app.listen(8000) works
