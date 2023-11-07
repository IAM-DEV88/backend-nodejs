const express = require('express');
const ProductsService = require('../services/product.service');

const router = express.Router();
const service = new ProductsService()

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
  // console.log(products);
  // res.send('products');
});

router.get('/filter', (req, res) => {
  res.json('filtro');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id)
  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'Crear registro',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Actualizar registro parcialmente',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Eliminar registro',
    id,
  });
});

module.exports = router;
