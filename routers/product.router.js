import express from 'express';
import ProductController from '../controllers/product.controller.js';

const ProductRouter = express.Router();
const product = new ProductController();

ProductRouter.get('/products', (req, res) => {
  return product.list(req, res);
});

ProductRouter.get('/products/:id([0-9]*)', (req, res) => {
  return product.details(req, res);
});

ProductRouter.post('/products', (req, res) => {
  return product.create(req, res);
});

ProductRouter.put('/products', (req, res) => {
  return product.update(req, res);
});

ProductRouter.delete('/products/:id([0-9]*)', (req, res) => {
  return product.delete(req, res);
});

export default ProductRouter;
