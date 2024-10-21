import React, { useEffect, useState } from 'react'
import axios from "axios"
import {loadStripe} from '@stripe/stripe-js';

function Products() {
    const [products,setProducts] = useState([])
    


    const handleStripe = async (e) => {
        const selectedItemIndex = e.target.value;
        if (products[selectedItemIndex].quantity === 0) {
            return;
        }

        const stripe = await loadStripe(import.meta.env.STRIPE_CLIENT_ID);

        const body = {
            id: 89901,  // Ideally, generate unique ids for orders
            items: selectedItemIndex
        };

        const headers = {
            "Content-Type": "application/json",
        };

        const response = await fetch(`http://localhost:5000/api/products/payment`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });

        const responseData = await response.json();

        if (responseData.payment) {
            setProducts(responseData.products);
            const result = await stripe.redirectToCheckout({ sessionId: responseData.sessionId });

            if (result.error) {
                console.error(result.error.message);
            }
        }
    };

    useEffect(()=>{
        axios.get("/api/products/all").then((resp)=>{
            console.log(resp)
            resp.data?.length>0 && setProducts([...resp.data])
        }).catch((error)=>{
            console.error(error)
        })
    },[])
  return (
    <div className='h-auto w-full flex justify-center items-center mx-auto'>
        <div className='mx-auto' >

        {
            products.length>0 && products.map((val,index)=>{
                return (
                    <div key={index} className='h-[310px] w-[220px] inline-block m- md:m-3 rounded-lg justify-between' >
                        <img className='h-[280px] w-[190px]' src={val.img}/>  
                        <div className='flex justify-center'>
                        <span className='bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-700 font-semibold text-transparent bg-clip-text'>{val.quantity===0?`out of stock`:`Available: ${val.quantity}`}</span>

                        </div>
                        <div className='flex-col gap-y-5'>

                        <div className='flex justify-center'>
                            <span className='text-white'>${val.price}</span>
                        </div>
                        <div className='flex justify-center'>
                        <button onClick={handleStripe} value={index} className='px-6 py-2 font-semibold text-white bg-gradient-to-r from-yellow-600 via-orange-700 to-red-900 hover:scale-105 transition-all duration-700 rounded-lg'>Buy</button>
                        </div>

                        </div>  
 
                    </div>
                )
            })
        }

</div>


    </div>
  )
}

export default Products