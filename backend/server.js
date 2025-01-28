const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000;

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Failed to connect to MongoDB', error);
});

const authRoutes = require('./routes/auth.js');
app.use(authRoutes);
