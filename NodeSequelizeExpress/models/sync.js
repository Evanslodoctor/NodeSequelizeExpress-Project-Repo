// sync.js
const sequelize = require('./db');
const Post = require('./posts'); // Import your model(s)

// Synchronize the models with the database
sequelize.sync({ force: true }) // This will recreate tables every time; use { force: false } in production
  .then(() => {
    console.log('Database and tables created!');
  })
  .catch((err) => {
    console.error('Error syncing the database:', err);
  });
