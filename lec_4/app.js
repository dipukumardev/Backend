const express = require('express')
const app = express()


app.use(function (req, res, next) {
  console.log("dipu kumar");
  next();
})


app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/dipu', function (req, res) {
  res.send('dipu singh')
})


app.get('/aa', function (req, res) {
  res.send('Adityaaaaaaaaaaaaaa')
})


app.get('/dd', function (req, res, next) {

  // error code in express js
  return next(new Error("something wrong"));
})


// error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000)