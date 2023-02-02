// IMPORT PACKAGES
const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')
require('dotenv').config()
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');


// CONFIG EXPRESS
app.use(express.json())  // POST METHOD
app.use(cookieParser());

// app.use(cors()) // Having 2 localhost port to communicate
// Change the app.use(cors()) to the one below
//this passes credentials to enable to user to do certain things
app.use(cors({
    credentials: true, 
    origin: 'http://localhost:3000'
}));
// CONFIG MONGOOSE
require("./config/mongoose.config");
// ROUTES
require("./routes/recipes.routes")(app)
require("./routes/user.routes")(app)

// PORT
app.listen(port, () => console.log(`Listening on port: ${port}`));