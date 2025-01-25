const express = require('express');
const path = require('path'); // Require path module for file paths

const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files (CSS, JavaScript, images)
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs'); 

// Define the home route
// app.get("/", function (req, res) {
//     res.render("index"); // Automatically looks for "views/index.ejs"
// });


app.get("/profile/:username", function(req,res){
    res.send(`Welcome,  ${req.params.username}`);
});

app.get("/author/:username/:age",function(req, res){
    // res.send(req.params);
    res.send(`Welcome, ${req.params.username}  of age ${req.params.age}`)
} )


// Start the server
app.listen(3000, function () {
    console.log("Server is running on http://localhost:3000");
});

// Debugging helpers
console.log("Current directory:", __dirname); 
console.log("Public directory path:", path.join(__dirname, 'public')); 
