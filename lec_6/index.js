const express = require('express');
const app = express();
//  this is reqire to the the path ;
const path = require('path');



app.use = (express.json());
app.use = (express.urlencoded({ extended: true }));

// this line use to the css,venall js;
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engin', 'ejs');



app.get("/", function (req, res) {
    res.render("index.ejs");
})

app.listen(3000, function () {
    console.log("good");
})

