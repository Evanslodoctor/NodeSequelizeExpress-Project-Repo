// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_project_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // Change this according to your database
});

module.exports = sequelize;
