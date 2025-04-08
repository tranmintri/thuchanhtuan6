const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.DB_PORT || 5003;


// Middleware
app.use(express.json());

// Routes
const customerRoutes = require('./src/routes/routes');
app.use('/api/v1/customers', customerRoutes);

// Khởi động máy chủ
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
