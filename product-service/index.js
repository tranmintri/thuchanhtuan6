const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.DB_PORT || 8080;


// Middleware
app.use(express.json());

// Routes
const productRoutes = require('./src/routes/routes');
app.use('/api/v1/products', productRoutes);

// Khởi động máy chủ
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
