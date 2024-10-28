import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
// Each product will be represented in a cart . It has a product image,price,delete product(removed from cart),

//key features:-
// 1. Product image
// 2. Product title
// 3. Product price
// 4. Product description
// 5. Remove from the cart


function Cart() {

  const [products, setProducts] = useState([])
  async function GetCartProducts() {
    const resp = await axios.get("/api/getcartproducts")

    if (resp.status === 200) {
    setProducts([...resp.data])
  }


  }
  useEffect(() => {
    GetCartProducts()
  }, [])

  async function removeFromCart(e) {
    e.preventDefault();
    const resp = await axios.put(`/api/remove/${e.target.value}`)
    if (resp.data == "removed from cart") {
      GetCartProducts();
    }
  }
  console.log(products.length, "products length")


  return (
    <div className='overflow-y-scroll overflow-x-hidden h-screen '>
      {products.length>0?(
        
          products.map((product, index) => {
            return (
              <div key={index} className='h-[146px] w-[600px] bg-white m-4 p-2 inline-block'>

                <div className='flex justify-between'>

                  <div className='flex my-auto items-center h-[100%]'>
                    <img className='h-[100%] shadow-lg' src={product?.image} />
                  </div>
                  <div className='flex-col'>
                    <span className='font-bold'>{product?.title}</span>
                    <br />
                    <span className='text-sm font-semibold '>{product?.description}</span>
                    <br />
                    <div className='flex justify-between w-full '>
                      <div>
                        <span className='font-semibold text-sm text-red-600 '>Rs. {product?.price}</span>




                      </div>
                    </div>

                  </div>

                </div>

                <div className='flex justify-end mt-1'>
                  <button onClick={removeFromCart} value={product?.id} className=' px-6 py-[2px] bg-red-500 hover:bg-red-800 text-white font-semibold hover:scale-105 transition-all duration-700 rounded-lg'>Remove from cart</button>
                </div>


              </div>

            )
          })
        

      ):<div className='flex justify-center h-screen items-center'>
        <span className='text-5xl text-white font-semibold'>No products in the cart</span>

      </div>
      }



    </div>
  )
}

export default Cart