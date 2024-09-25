import { db } from "../db.js"
import jwt from "jsonwebtoken"

export const getPosts = (req,res) => {

    const query = req.query.category?"select * from posts where category=?":"select * from posts"
    console.log(req.query.category)
    db.query(query,[req.query?.category],(err,data)=>{
        if (err){
            res.json([])
        }else{
            res.status(200).json(data)
        }
    })
    // res.status(200).json("get posts")
}

export const addPost = (req,res) => {

    const query = "insert into posts(`title`,`description`,`image`)"
    values = [req.body.username,]
    
    res.status(200).json("add post")
}

export const getPost = (req,res) => {

    const query = "select `title`,`description`,`username`,p.image,u.img,`create_time`,`category` from users u join posts p where u.id=p.uid and p.id=? "

    const postID = req.params?.id

    db.query(query,[postID],(err,data)=>{
        if(err){
            res.json(err);
        }else{
            res.status(200).json(data[0])
        }
    })
    // res.status(200).json("get post")
}

export const deletePost = (req,res) => {
    if (!req.cookies.access_token){
        res.status(401).json("Not authenticated!")
    }

    jwt.verify(req.cookies.access_token,process.env.JWT_SECRET,(err,data)=>{
        if(err){
            res.status(403).json("Not allowed to delete")
        }
        // console.log("ID:-",data)
        const query = `delete from posts where id = ? and uid = ${data.id} `
        console.log("ID:-",query)
        const postID = req.params?.id
    
        db.query(query,[postID],(err,data)=>{
            console.log(data)
            if(err){
                res.json(err)
            }else{
                res.status(200).json("post deleted")
            }
        })
        // res.status(200).json("deleted post")


    })

}

export const updatePost = (req,res) => {
    res.status(200).json("update post")
}
