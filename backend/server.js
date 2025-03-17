import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

// a middleware that allows us to accept JSON data in the req.body
app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(5000, () => {
    connectDB();
    console.log("Server is running on port 5000");
});
