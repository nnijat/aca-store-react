let express = require("express");
let orderRoute = require("./routes/orders");
let productRoute = require("./routes/products");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
require('dotenv').config;

const DB_CONNECTION_STRING = process.env.CONNECTION_STRING;
const thePort = 3002;

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(orderRoute);
app.use(productRoute);

mongoose.connect('mongodb+srv://nn-database:nn0213@nn-aca-db-g06t0.mongodb.net/aca_database', { useNewUrlParser: true }, (err) => {
    console.log(err)
    console.log("Connected successfully to server");
});

app.listen(thePort, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now listening for messages on port", thePort);
});
