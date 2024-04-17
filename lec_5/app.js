const express = require('express')
const app = express()


// use of the cookie
// learn more two line in code 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

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


// error handler (default errror handler , writing error handler) ,(all put in last )
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000)