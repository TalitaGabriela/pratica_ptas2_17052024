const express = require ("express")
const exphbs = require ("express-handlebars")

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");