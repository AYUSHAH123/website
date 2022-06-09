const express = require("express");
const app = express();
const routes = require("./public/Js/routes");
const path = require("path");

app.set('view engine', "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/images", express.static(path.join(__dirname, 'public/images')));
app.use("/Js", express.static(path.join(__dirname, 'public/Js')));
app.use("/css", express.static(path.join(__dirname, 'public/css')));
app.use(routes);


app.listen(3000, () =>
console.log("https://localhost:3000/"));