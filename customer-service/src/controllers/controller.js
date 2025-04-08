const customerService = require('../services/services');

const createCustomer = async (req, res) => {
  try {
    const customer = await customerService.createCustomer(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCustomerById = async (req, res) => {
  try {
    const customer = await customerService.getCustomerById(req.params.id);
    if (customer) {
      res.status(200).json(customer);
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllCustomers = async (req, res) => {
    try {
        console.log("toi day")
      const customers = await customerService.getAllCustomers();
      console.log(customers)
      if (customers) {
        res.status(200).json(customers);
      } else {
        res.status(404).json({ error: 'Customer not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await customerService.updateCustomer(req.params.id, req.body);
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    await customerService.deleteCustomer(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  getAllCustomers
};
