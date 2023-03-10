var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.locals.pretty = true; 
app.set("view engine", "jade");
app.set("views", "./views");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3000, function() {
    console.log("App listening in on port 3000")
});

// GET
app.get("/", function(req, res) {
    res.send("Hello home page");
})

// Jade template
app.get("/template", function(req, res) {
    res.render("temp", {time: Date(), title: "Jade"});
});

// Jade template for form
app.get("/form", function(req, res) {
    res.render("form");
});
app.get("/form_receiver", function(req, res) {
    var title = req.query.title;
    var description = req.query.description;
    res.send(title + ", " + description);
    // res.send("Hello, GET");
});

// Query parameters
app.get("/topic", function(req, res) {
    var topics = [
        "Javascript is...",
        "NodeJS is ...",
        "Express is...",
    ];
    var output = `
    <a href="/topic?id=0">Javascript</a><br />
    <a href="/topic?id=1">NodeJS</a><br />
    <a href="/topic?id=2">Express</a><br />
    ${topics[req.query.id]}
    `
    res.send(output);
});

// Semantic URL
app.get("/topic/:id/:mode", function(req, res) {
    res.send(req.params.id + ", " + req.params.mode);
});
app.get("/dynamic", function(req, res) {
    var lis = "";
    for (var i = 0; i < 5; i++) {
        lis = lis + "<li>coding</li>";
    }
    var time = Date();
    var output = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title></title>
        </head>
        <body>
            Hello, Dynamic
            ${lis}
            ${time}
        </body>
    </html>
    `;
    res.send(output);
});
app.get("/route", function(req, res) {
    res.send("Hello Router, <img src='/route.png'></img>");
});
app.get("/login", function(req, res) {
    res.send("<h1>Please log in</h1>");
});
app.get("/form_receiver", function(req, res) {
    var title = req.query.title;
    var description = req.query.description;
    res.send(title + ", " + description);
});

// POST
app.post("/form_receiver", function(req, res) {
    var title = req.body.title;
    var description = req.body.description;
    res.send(title + "," + description);
    // res.send("Hello, POST");
});