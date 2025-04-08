const Customer = require('../models/customer');

// CRUD logic
const createCustomer = async (data) => {
  return await Customer.create(data);
};

const getCustomerById = async (id) => {
  return await Customer.findByPk(id);
};

const getAllCustomers = async () => {
    try {
      const Customers = await Customer.findAll();
      return Customers; // Trả về một mảng các sản phẩm hoặc mảng rỗng nếu không có sản phẩm nào
    } catch (error) {
      console.error('Lỗi khi truy xuất tất cả sản phẩm:', error);
      throw error; // Ném lỗi để xử lý ở cấp cao hơn nếu cần
    }
  };

const updateCustomer = async (id, data) => {
  const Customer = await Customer.findByPk(id);
  if (Customer) {
    return await Customer.update(data);
  }
  throw new Error('Customer not found');
};

const deleteCustomer = async (id) => {
  const Customer = await Customer.findByPk(id);
  if (Customer) {
    return await Customer.destroy();
  }
  throw new Error('Customer not found');
};

module.exports = {
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  getAllCustomers
};
