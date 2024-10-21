import { products } from "./ProductHandlers.js";
import Stripe from "stripe";
import { configDotenv } from "dotenv";

configDotenv();
const stripe = new Stripe(process.env.STRIPE_CLIENT_SECRET);

const ProductPayment = async (req, res) => {
    const { id, items } = req.body;
    
    if (!items) {
        res.json({ id: id, payment: false, products: products, message: "No such product" });
        return;
    }
    
    if (products[parseInt(items)].quantity === 0) {
        res.json({ id: id, payment: false, products: products, message: "No items" });
        return;
    }

    const lineItemSchema = [
        {
            price_data: { 
                currency: "usd",
                product_data: {
                    name: products[parseInt(items)].name,
                    images: [products[parseInt(items)].images] 
                },
                unit_amount: Math.round(products[parseInt(items)].price * 100) 
            },
            quantity: 1
        }
    ];

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItemSchema,
            mode: "payment",
            success_url: "http://localhost:5173/success",  
            cancel_url: "http://localhost:5173/failed"
        });
        console.log(session)
        products[parseInt(items)].quantity -= 1;
        res.json({ id: id, payment: true, products: products, sessionId: session.id, message: "Payment successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Payment failed", error });
    }
};

export { ProductPayment };
