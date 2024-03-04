// post.js
const { DataTypes } = require('sequelize');
const sequelize = require('./db'); // Import the Sequelize instance

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Post;
