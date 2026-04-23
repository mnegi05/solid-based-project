import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    amount: Number,
    status: String,
});

export default mongoose.model("Order", OrderSchema);