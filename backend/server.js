const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const adminRoutes = require('./Routes/Adminroute');  
const userRoutes = require('./Routes/Userroute');
const bookRoutes = require('./Routes/Bookroute');

dotenv.config();

const app = express();


app.use(express.json());


app.use('/api/admin', adminRoutes); 
app.use('/api/auth', userRoutes);
app.use('/api/books', bookRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
