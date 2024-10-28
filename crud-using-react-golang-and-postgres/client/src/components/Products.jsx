import React, { useEffect, useState } from 'react'
import axios from "axios"

// All the products are fetched from the database and shown here . Here the product have an image, button to add to cart, also you can see the price of the product and a small description of the product, and also the title of the product .

//key features:-
// 1. Product image
// 2. Product title
// 3. Product price
// 4. Product description
// 5. Add to cart button

function Products() {
  
  const [products,setProducts] = useState([
    {
      productId:"",
      productTitle:"",
      productDescr:"",
      productImage:"",
      productPrice:0,
      productIncart:""
    },])
    async function GetAllProducts(){
      const resp = await axios.get("/api/products")
      if(resp.status===200){
        console.log(resp.data)
        setProducts(resp.data.length>0 && resp.data.map(product => ({
          productId:product.id,
          productTitle: product.title,
          productDescr: product.description,
          productImage: product.image,
          productPrice: product.price,
          productIncart: product.incart
      })));
  
      } 
    }
  useEffect(()=>{
    GetAllProducts()
  },[])

  async function addToCart(e){
    e.preventDefault();
    const resp = await axios.put(`/api/update/${e.target.value}`)
    if(resp.data=="added to cart"){
          GetAllProducts();   
    }
  }


  async function removeFromCart(e) {
    e.preventDefault();
    const resp = await axios.put(`/api/remove/${e.target.value}`)
    if(resp.data=="removed from cart"){
          GetAllProducts();   
    }
  }

  console.log(products.length)
  return (
    <div className='overflow-y-scroll overflow-x-hidden h-screen '>
      {products.length>0?<div>

      {
        products.length>0 && products.map((product,index)=>{
          return (
            <div key={index} className='h-[146px] w-[600px] bg-white m-4 p-2 inline-block'>
              
                <div className='flex justify-between'>

                  <div className='flex my-auto items-center h-[100%]'>
                    <img className='h-[100%] shadow-lg' src={product.productImage}/>
                  </div>
                  <div className='flex-col'>
                  <span className='font-bold'>{product.productTitle}</span>
                    <br/>
                      <span className='text-sm font-semibold '>{product.productDescr}</span>
                      <br/>
                    <div className='flex justify-between w-full '>
                      <div>
                      <span className='font-semibold text-sm text-red-600 '>Rs. {product.productPrice}</span>




                      </div>
                    </div>

                  </div>

                  </div>

                      <div className='flex justify-end mt-1'>
                      {product.productIncart===false?<button onClick={addToCart} value={product.productId} className=' px-6 py-[2px] bg-orange-500 hover:bg-orange-800 text-white font-semibold hover:scale-105 transition-all duration-700 rounded-lg'>Add to cart</button>:<button onClick={removeFromCart} value={product.productId} className=' px-6 py-[2px] bg-red-500 hover:bg-red-800 text-white font-semibold hover:scale-105 transition-all duration-700 rounded-lg'>Remove from cart</button>}
                  </div>
                  

              </div>
          
          )
        })
      }
      </div >:<div className='h-screen flex justify-center items-center '> <span className='text-5xl text-white font-semibold '>No products in cart</span></div>}

    </div>
  )
}

export default Products
