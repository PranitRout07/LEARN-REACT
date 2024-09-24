import bcrypt from "bcryptjs"
import { db } from "../db.js"
import jwt from "jsonwebtoken"


const register = (req,res) => {
    const querry =  "SELECT * from users where email = ? OR username = ?"
    db.query(querry,[req.body?.email,req.body?.name],(err,data)=>{
        if (err){
            return res.json(err);
        }
        if (data.length){
            return res.status(409).json("User already exists")
        }

        const username  = req.body?.username ;
        const email = req.body?.email;
        const password = req.body?.password;

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password,salt)

        const querry = "insert into users(`username`,`email`,`password`) values (?)"
        const values = [
            username,email,hashedPassword
        ]

        db.query(querry,[values],(err,data)=>{
            if (err) return res.status(500).json(err);
            else{
                return res.status(200).json("user has been created")
            }

        })

    })
}
const login = (req,res) => {

    console.log(req.body?.username,req.body?.password,"req")

    const username = req.body?.username;
    const password = req.body?.password;

    const query = "select * from users where username=?"
    const resp = db.query(query,[username])
    db.query(query,[username],(err,data)=>{
        if (err) return res.json(err);
        else{
            console.log(data[0],"data")
            const isPasswordCorrect = bcrypt.compareSync(password,data[0].password)

            if (!isPasswordCorrect){
                res.status(404).json("wrong username or password")
            }
            
            const token = jwt.sign({id: data[0].id},process.env.JWT_SECRET)
            const { pswd,...other} = data[0]
            res.cookie("access_token",token,{
                httpOnly:true,
            }).status(200).json(other)

        }

    })

}

const logout = (req,res) => {
    console.log("request through logout")
}

export {register,login,logout}