require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 8080;
console.log(PORT);

// Proxy configuration
const proxyOptions = [
  { context: '/api/v1/products', target: process.env.PRODUCT_SERVICE_URL + '/api/v1/products' },
  { context: '/api/v1/orders', target: process.env.ORDER_SERVICE_URL + '/api/v1/orders' },
  { context: '/api/v1/customers', target: process.env.CUSTOMER_SERVICE_URL + '/api/v1/customers'},
];

// Apply proxy middleware
proxyOptions.forEach(({ context, target }) => {
    console.log(`Proxying ${context} => ${target}`);
    app.use(context, createProxyMiddleware({ target, changeOrigin: true }));
  });

// Start the server
app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
