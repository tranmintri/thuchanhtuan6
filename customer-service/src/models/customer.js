const { Sequelize } = require('sequelize');
const sequelize = require('../../db'); // Adjust the path as necessary

const Customer = sequelize.define('Customer', {
  name: {
    type: sequelize.Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: sequelize.Sequelize.DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'customers',
});

// Synchronize the model with the database
sequelize.sync({ alter: true }) // Sử dụng { alter: true } để cập nhật bảng mà không mất dữ liệu
  .then(() => {
    console.log('Database & tables updated!');
  })
  .catch(err => {
    console.error('Error updating database & tables:', err);
  });

module.exports = Customer;
