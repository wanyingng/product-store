import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    image: {
        type: String,
        required: true,
    }
}, {
    timestamps: true // createdAt, updatedAt
});

// Create a products collection in MongoDB
const Product = mongoose.model("Product", productSchema);

export default Product;
