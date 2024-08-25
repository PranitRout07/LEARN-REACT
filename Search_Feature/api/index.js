import express from 'express';
import cors from 'cors';
import {userData} from './userData.js'
const app = express()
app.use(cors());
app.get("/",(req,res)=>{
  res.json(userData) 
})

app.listen(8000,()=> console.log("Api running in port 8000"))