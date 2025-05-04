const express = require('express');
const port = 3000;
const app = express();
const mysql = require('mysql2');
const methodOverride = require("method-override");
const cors = require('cors');
const path = require('path');

app.use(express.json());
app.use(cors()); // Enable CORS for all routes
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.static('htmlfile'));
app.set("views", path.join(__dirname, "/views"));

const connection = require("./config/database.js");

//show route
const ReadRoute = require("./Routes/Read.js"); 
app.use(ReadRoute);
//insert route
const CreateRoute = require("./Routes/Create.js"); 
app.use(CreateRoute);
//Edit route
const UpdateRoute = require("./Routes/Update.js"); 
app.use(UpdateRoute);
//Delete route
const DeleteRoute = require("./Routes/Delete.js"); 
app.use(DeleteRoute);


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    connection.connect((err) => {
        if (err) throw err;
        console.log('MySQL Connected!');
    });
})