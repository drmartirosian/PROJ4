const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

module.exports = {
    indexProds,
    detailProd,
    createProd,
    updateProd,
    delete: deleteProduct,
};


//Find ALL products
async function indexAll(req, res) {
    const products = await Product.find()
    res.json(products)
}

//find ONE product
async function details(req, res)  {
    const product = await Product.findById(req.params.id)
    res.json(product)
}

//Submit product
async function create(req, res) {
    const { title, description, price } = req.body
    const product = new Product({ title, description, price })
    await product.save()
    res.json({
        status: "Create"
    })
}

//Update product
async function update(req, res) {
    const { title, description } = req.body
    const newproduct = { title, description }
    await Product.findByIdAndUpdate(req.params.id, newproduct)
    res.json({
        status: "Updated"
    })
}

//Destroy product
async function deleteProduct (req, res) {
    await Product.findByIdAndRemove(req.params.id)
    res.json({
    status: "Destroyed"
    })
}



module.exports = router