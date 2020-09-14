import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
  description: String,
})

const ProductModel = mongoose.model("Product", ProductSchema)

export { ProductModel }
