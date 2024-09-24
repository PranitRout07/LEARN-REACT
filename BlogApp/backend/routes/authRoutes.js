import { Router} from "express";
import {register,login,logout} from "../controllers/authController.js"

const routers = Router()

routers.post("/register",register)
routers.post("/login",login)
routers.post("/logout",logout)

export default routers;