const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tours', require('./routes/tourRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));
app.use('/api/category', require('./routes/categoryRoutes'));
app.use('/api/location', require('./routes/locationRoutes'));
app.use('/api/itinerary', require('./routes/itineraryRoutes'));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
