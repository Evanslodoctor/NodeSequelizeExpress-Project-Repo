// insertData.js
const Post = require('./posts');

// Add sample data to the table
Post.create({
  title: 'Sample Title',
  postText: 'This is a sample post text.',
  userName: 'JohnDoe',
})
  .then((post) => {
    console.log('Data inserted successfully:', post.toJSON());
  })
  .catch((err) => {
    console.error('Error inserting data:', err);
  });
