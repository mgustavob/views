# VIEWS

 ## This is a General Assembly project that requires:

 * Creatin a NPM
 * Add Express
 * Add a local Host in index.js
 * Create 3 links: About, Home and Blog
 * Create a new folder caled 'views'
 * Create 3 html pages in this folder for the 3 links: Home, About and Blog
 * link those 3 pages using:

 ``` javascript
 app.get('/', function(req, res) {
  res.sendFile(__dirname+'/views/index.html');
});
```
