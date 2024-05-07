import express from 'express'
const app = express()

app.set("view engine", 'ejs');
//middleware
app.use(function(req, res, next){
  next();
});
a
app.get('/', function (req, res) {
  res.send('Hello World')
})

//route parameters
// dynamic routing

  app.get('/Profile/:username', function (req, res) {
    res.send(`Hello form ${req.params.username}`)
  })
app.listen(3000)


//Template engine



//ejs setup 
// route setup
// res req next
// dynamic routing
// Template engine
