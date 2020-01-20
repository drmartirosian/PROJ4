const Product = require('../models/Product');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  const products = await Product.find({});
  res.status(200).json(products);
}

async function show(req, res) {
  const puppy = await Product.findById(req.params.id);
  res.status(200).json(puppy);
}

async function create(req, res) {
  const puppy = await Product.create(req.body);
  res.status(201).json(puppy);
}

async function deleteOne(req, res) {
  const deletedProduct = await Product.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedProduct);
}

async function update(req, res) {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedProduct);
}
