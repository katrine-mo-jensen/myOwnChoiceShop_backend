import express from 'express';
import productRouter from './routers/product.router.js';
import BrandRouter from './routers/brand.router.js';
import { router as InitRouter } from './routers/init.sequelize.route.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(productRouter);
app.use(BrandRouter);
app.use(InitRouter);

// Handle errors for routes that are not found
app.use((req, res) => {
  res.status(404).send('Siden blev ikke fundet!');
});

// Activate server and listen on the port from .env file
app.listen(process.env.PORT, () => {
  console.log(`Server kører på http://localhost:${process.env.PORT}`);
});
