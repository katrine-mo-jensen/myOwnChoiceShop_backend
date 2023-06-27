
import express from 'express'
import {ProductRouter} from './routers/product.router.js';
import {BrandRouter} from './routers/brand.router.js';
import {InitRouter } from './routers/init.sequelize.route.js';
import {UserRouter} from './routers/user.router.js';
import {TypeRouter} from './routers/type.router.js';
import {TasteRouter} from './routers/taste.router.js';
import {ReviewRouter} from './routers/review.router.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(ProductRouter); // Use a path prefix for product routes
app.use(BrandRouter); // Use a path prefix for brand routes
app.use(InitRouter);
app.use(UserRouter);
app.use(TypeRouter);
app.use(TasteRouter);
app.use(ReviewRouter);

app.get("/", (req, res) => {
    res.send("Hej verden. Her er jeg!");
  });
  
  app.get("/about", (req, res) => {
    res.send("Læs mere om min Node.js app!");
  });

app.get("/", (req, res) => {
  res.send("Hej verden, her er jeg!");
});

app.get("/about", (req, res) => {
  res.send("Læs mere om min Node.js app!");
});

// Handle errors for routes that are not found
app.use((req, res) => {
  res.status(404).send('Siden blev ikke fundet!');
});

// Activate server and listen on the port from .env file
app.listen(process.env.PORT, () => {
  console.log(`Server kører på http://localhost:${process.env.PORT}`);
});
