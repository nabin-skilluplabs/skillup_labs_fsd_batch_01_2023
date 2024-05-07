import express from 'express'
const app = express()

app.set("view engine", 'ejs');

app.use(express.static('./public'))

app.get('/', function (req, res) {
  res.render("index")
})
function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}
app.listen(3000)


//ejs setup 
// route setup
// res req next
// dynamic routing
// Template engine
