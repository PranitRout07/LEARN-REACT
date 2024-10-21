import express from "express"
import { Products } from "../handlers/ProductHandlers.js";
import { ProductPayment } from "../handlers/PaymentHandlers.js";

const productRouter = express.Router();
productRouter.get("/all",Products)
productRouter.post("/payment",ProductPayment)
export default productRouter