import express from "express"
import postRoutes from "./routes/postRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import cookieParser from "cookie-parser";
import doteenv from "dotenv";

doteenv.config()
import { db } from "./db.js";
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to db!");
  });
const app = express();
app.use(express.json());
app.use(cookieParser())

app.use("/api/details",postRoutes)
app.use("/api/auth",authRoutes)


app.listen(8000,()=>{
    console.log("Running in port 8000")
})