// app.js
const express = require('express');
const app = express();

const sequelize = require('./models/db');
require('./models/posts'); // Import your model(s)
require('./models/sync'); // Sync your models with the database

// Your express routes and other configurations go here
//const postsRouter = require('./router/posts'); // Adjust the path accordingly
//app.use("/post", postsRouter); // Corrected variable name
app.listen(3011, () => {
  console.log('Server running on http://localhost:3011');
});
