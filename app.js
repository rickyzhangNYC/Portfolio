var express         = require("express"),
    app             = express();

//Require routes
var indexRoutes = require("./routes/index.js");
var projectRoutes = require("./routes/projects.js");

//Setting view engine to ejs
app.set("view engine", "ejs");
//express.static("public") defaults to looking at public folder
app.use(express.static(__dirname + "/public"));

//Use routes
app.use("/", indexRoutes);
app.use("/projects", projectRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is live!");
})