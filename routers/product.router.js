import express from 'express';
import productController from '../controllers/product.controller.js';

const productRouter = express.Router();
const product = new productController();

productRouter.get('/products', (req, res) => {
  return product.list(req, res);
});

productRouter.get('/products/:id([0-9]*)', (req, res) => {
  return product.details(req, res);
});

productRouter.post('/products', (req, res) => {
  return product.create(req, res);
});

productRouter.put('/products', (req, res) => {
  return product.update(req, res);
});

productRouter.delete('/products/:id([0-9]*)', (req, res) => {
  return product.delete(req, res);
});

export default productRouter;
