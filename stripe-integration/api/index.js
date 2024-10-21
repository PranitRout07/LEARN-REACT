import express from "express"
import cors from "cors"
import statusChecker from "./middlewares/statusMiddlewares.js"
import productRouter from "./routes/productRoutes.js"
import Stripe from "stripe"
import { configDotenv } from "dotenv"
configDotenv();
const stripe = new Stripe(process.env.STRIPE_CLIENT_SECRET);

const app = express()
app.use(express.json())
app.use(cors())
app.use(statusChecker)

app.use("/api/products",productRouter)

app.listen("5000",()=>{
    console.log("running in port 5000...")
})



