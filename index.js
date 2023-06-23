
import express from 'express'; 
import { productRouter } from './routers/product.router.js'
import { BrandRouter } from './routers/brand.router.js'
import { router as InitRouter } from './routers/init.sequelize.route.js'



import dotenv from "dotenv";
dotenv.config();

const app = express(); 

app.use(express.urlencoded({ extended: true }));

app.use(productRouter);
app.use(BrandRouter);
app.use(InitRouter);

app.get("/", (req, res) => {
    res.send("Hej verden. Her er jeg!");
  });
  
  app.get("/about", (req, res) => {
    res.send("Læs mere om min Node.js app!");
  });

// Skriver fejl hvis route ikke findes
app.use((req, res) => {
    res.status(404).send("Siden blev ikke fundet!")
})


// Aktiverer server og lytter på port fra .env fil
app.listen(process.env.PORT, () => {
	console.log(`Server kører på http://localhost:${process.env.PORT}`)	
})