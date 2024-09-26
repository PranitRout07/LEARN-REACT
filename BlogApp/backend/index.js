import express from "express"
import postRoutes from "./routes/postRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import cookieParser from "cookie-parser";
import doteenv from "dotenv";
import multer from "multer";


doteenv.config()
import { db } from "./db.js";
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to db!");
  });


  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../frontend/public/uploads')
    },
    filename: function (req, file, cb) {

      
      // console.log(path.extname(file.originalname),"extension")
      cb(null,Date.now()+"."+file.mimetype.split('/')[1])
    }
  })
  





const upload = multer({ storage })
const app = express();

app.post('/api/upload', upload.single('file'), function (req, res) {

  const file = req.file
  
  res.status(200).json(file.filename)
});
app.use(express.json());
app.use(cookieParser())

app.use("/api/details",postRoutes)
app.use("/api/auth",authRoutes)


app.listen(8000,()=>{
    console.log("Running in port 8000")
})