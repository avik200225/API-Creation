const mongoose = require('mongoose');
// MongoDB Connection
mongoose.connect('mongodb://localhost/food_nutrition_db')
  .then(()=>console.log('Database is Connected'))
  .catch(()=>console.log('Database is Not Connected'))
  
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
