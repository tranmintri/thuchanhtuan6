const { Sequelize } = require('sequelize');
const sequelize = require('../../db'); // Adjust the path as necessary

const Product = sequelize.define('Product', {
  name: {
    type: sequelize.Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: sequelize.Sequelize.DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: sequelize.Sequelize.DataTypes.TEXT,
    allowNull: true,
  },
  stock: {
    type: sequelize.Sequelize.DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'products',
});

// Synchronize the model with the database
sequelize.sync({ alter: true }) // Sử dụng { alter: true } để cập nhật bảng mà không mất dữ liệu
  .then(() => {
    console.log('Database & tables updated!');
  })
  .catch(err => {
    console.error('Error updating database & tables:', err);
  });

module.exports = Product;
