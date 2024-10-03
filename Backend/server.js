const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const applicationRoutes = require('./routes/applicationRoutes');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(cors());
app.use('/api/applications', applicationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
