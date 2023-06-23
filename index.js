import express from 'express';
import productRouter from './routers/product.router.js';
import brandRouter from './routers/brand.router.js';
import AuthRouter from './routers/auth.router.js';
import { router as InitRouter } from './routers/init.sequelize.route.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(productRouter); // Use a path prefix for product routes
app.use(brandRouter); // Use a path prefix for brand routes
app.use(InitRouter);
app.use(AuthRouter);

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
