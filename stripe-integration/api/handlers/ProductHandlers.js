import { json } from "express"
import { v4 as uuid } from 'uuid'

const products = [
    {
        name:"product 1",
        img: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800",
        product_id : uuid(),
        price:399,
        quantity:10 
    },
    {
        name:"product 2",
        img: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=800",
        product_id : uuid(),
        price:5,
        quantity:19 
    },
    {
        name:"product 3",
        img: "https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=800",
        product_id : uuid(),
        price:12,
        quantity:21 
    },
    {
        name:"product 4",
        img: "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=800",
        product_id : uuid(),
        price:449,
        quantity:35 
    },
    {
        name:"product 5",
        img: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800",
        product_id : uuid(),
        price:459,
        quantity:14 
    },
    {
        name:"product 6",
        img: "https://images.pexels.com/photos/1624504/pexels-photo-1624504.jpeg?auto=compress&cs=tinysrgb&w=800",
        product_id : uuid(),
        price:99 ,
        quantity:101 
    },
    {
        name:"product 7",
        img: "https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg?auto=compress&cs=tinysrgb&w=800",
        product_id : uuid(),
        price:89 ,
        quantity:111 
    },
    {
        name:"product 8",
        img: "https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&w=800",
        product_id : uuid(),
        price:49 ,
        quantity:56 
    },
    {
        name:"product 9",
        img: "https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&w=800",
        product_id : uuid(),
        price:259 ,
        quantity:23 
    },
    {
        name:"product 10",
        img: "https://images.pexels.com/photos/2832039/pexels-photo-2832039.jpeg?auto=compress&cs=tinysrgb&w=800",
        product_id : uuid(),
        price:599,
        quantity:100 
    },
]

const Products = async(req,res)=>{
    res.status(200).json(products)
}
export {Products,products} 