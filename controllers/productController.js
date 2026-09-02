let products = [
  {
    id: 1,
    name: "Cement",
    price: 35000,
    quantity: 50,
  },
  {
    id: 2,
    name: "Iron Bars",
    price: 25000,
    quantity: 100,
  },
];

const getProducts = (req, res) => {
  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
};
// GET one product
const getProductById = (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    product,
  });
};

// CREATE product
const createProduct = (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    message: "Product created successfully",
    product: newProduct,
  });
};

// UPDATE product
const updateProduct = (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  product.name = req.body.name ?? product.name;
  product.price = req.body.price ?? product.price;
  product.quantity = req.body.quantity ?? product.quantity;

  res.status(200).json({
    success: true,
    message: "Product updated successfully",
    product,
  });
};

// DELETE product
const deleteProduct = (req, res) => {
  const id = Number(req.params.id);

  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  const deletedProduct = products.splice(productIndex, 1);

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
    product: deletedProduct[0],
  });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
