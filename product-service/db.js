require('dotenv').config();
const { Sequelize } = require('sequelize');

// In ra các biến môi trường để kiểm tra
console.log('Database Name:', process.env.DB_NAME);
console.log('Database User:', process.env.DB_USER);
console.log('Database Password:', process.env.DB_PASS);
console.log('Database Host:', process.env.DB_HOST);
console.log('Database Port:', process.env.DB_PORT);

// Khởi tạo Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: console.log, // Hiển thị log các câu SQL, có thể tắt nếu không cần
  }
);

// Kiểm tra kết nối
sequelize.authenticate()
  .then(() => {
    console.log('Kết nối cơ sở dữ liệu thành công!');
  })
  .catch(err => {
    console.error('Không thể kết nối đến cơ sở dữ liệu:', err);
  });

module.exports = sequelize;
