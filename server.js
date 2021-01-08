const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

//serve the static content from the 'public' directory
app.use(express.static("public"));

//parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setting handlebars
const exphs = require("express-handlebars");

app.engine("handlebars", exphs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes and giving the server access to them
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

//Starting the servers
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
