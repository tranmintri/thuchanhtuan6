const Product = require('../models/product');

// CRUD logic
const createProduct = async (data) => {
  return await Product.create(data);
};

const getProductById = async (id) => {
  return await Product.findByPk(id);
};

const getAllProducts = async () => {
    try {
      const products = await Product.findAll();
      return products; // Trả về một mảng các sản phẩm hoặc mảng rỗng nếu không có sản phẩm nào
    } catch (error) {
      console.error('Lỗi khi truy xuất tất cả sản phẩm:', error);
      throw error; // Ném lỗi để xử lý ở cấp cao hơn nếu cần
    }
  };

const updateProduct = async (id, data) => {
  const product = await Product.findByPk(id);
  if (product) {
    return await product.update(data);
  }
  throw new Error('Product not found');
};

const deleteProduct = async (id) => {
  const product = await Product.findByPk(id);
  if (product) {
    return await product.destroy();
  }
  throw new Error('Product not found');
};

module.exports = {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getAllProducts
};
