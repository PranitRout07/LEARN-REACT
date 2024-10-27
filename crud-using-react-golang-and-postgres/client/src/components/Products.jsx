import React, { useState } from 'react'

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
      productTitle:"Acer Predator",
      productDescr:"It is a gaming laptop that runs all the games smoothly.Ih has 24 processors with 16 GB RAM and 4055 GPU. It comes with a 330 watt battery which can recharge the laptop very quickly.",
      productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQyVpfAVukAYMC_9sb1ai4A9vBTx4uUSH0a-VQoi3AFqi2j7qmk0e8j4UKUsB1O3_hzlwCZbSnzAu0aXF8B4Xg75V9lv_DO-FtRfqBRakglizVxFZOXEK1cYw",
      productPrice:150000
    },
    {
      productTitle:"Acer Predator",
      productDescr:"It is a gaming laptop that runs all the games smoothly.Ih has 24 processors with 16 GB RAM and 4055 GPU. It comes with a 330 watt battery which can recharge the laptop very quickly.",
      productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQyVpfAVukAYMC_9sb1ai4A9vBTx4uUSH0a-VQoi3AFqi2j7qmk0e8j4UKUsB1O3_hzlwCZbSnzAu0aXF8B4Xg75V9lv_DO-FtRfqBRakglizVxFZOXEK1cYw",
      productPrice:150000
    },
    {
      productTitle:"Acer Predator",
      productDescr:"It is a gaming laptop that runs all the games smoothly.Ih has 24 processors with 16 GB RAM and 4055 GPU. It comes with a 330 watt battery which can recharge the laptop very quickly.",
      productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQyVpfAVukAYMC_9sb1ai4A9vBTx4uUSH0a-VQoi3AFqi2j7qmk0e8j4UKUsB1O3_hzlwCZbSnzAu0aXF8B4Xg75V9lv_DO-FtRfqBRakglizVxFZOXEK1cYw",
      productPrice:150000
    },
    {
      productTitle:"Acer Predator",
      productDescr:"It is a gaming laptop that runs all the games smoothly.Ih has 24 processors with 16 GB RAM and 4055 GPU. It comes with a 330 watt battery which can recharge the laptop very quickly.",
      productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQyVpfAVukAYMC_9sb1ai4A9vBTx4uUSH0a-VQoi3AFqi2j7qmk0e8j4UKUsB1O3_hzlwCZbSnzAu0aXF8B4Xg75V9lv_DO-FtRfqBRakglizVxFZOXEK1cYw",
      productPrice:150000
    },
    {
      productTitle:"Acer Predator",
      productDescr:"It is a gaming laptop that runs all the games smoothly.Ih has 24 processors with 16 GB RAM and 4055 GPU. It comes with a 330 watt battery which can recharge the laptop very quickly.",
      productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQyVpfAVukAYMC_9sb1ai4A9vBTx4uUSH0a-VQoi3AFqi2j7qmk0e8j4UKUsB1O3_hzlwCZbSnzAu0aXF8B4Xg75V9lv_DO-FtRfqBRakglizVxFZOXEK1cYw",
      productPrice:150000
    },
    {
      productTitle:"Acer Predator",
      productDescr:"It is a gaming laptop that runs all the games smoothly.Ih has 24 processors with 16 GB RAM and 4055 GPU. It comes with a 330 watt battery which can recharge the laptop very quickly.",
      productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQyVpfAVukAYMC_9sb1ai4A9vBTx4uUSH0a-VQoi3AFqi2j7qmk0e8j4UKUsB1O3_hzlwCZbSnzAu0aXF8B4Xg75V9lv_DO-FtRfqBRakglizVxFZOXEK1cYw",
      productPrice:150000
    },
    {
      productTitle:"Acer Predator",
      productDescr:"It is a gaming laptop that runs all the games smoothly.Ih has 24 processors with 16 GB RAM and 4055 GPU. It comes with a 330 watt battery which can recharge the laptop very quickly.",
      productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQyVpfAVukAYMC_9sb1ai4A9vBTx4uUSH0a-VQoi3AFqi2j7qmk0e8j4UKUsB1O3_hzlwCZbSnzAu0aXF8B4Xg75V9lv_DO-FtRfqBRakglizVxFZOXEK1cYw",
      productPrice:150000
    },
  ])


  return (
    <div className='overflow-y-scroll overflow-x-hidden h-screen '>
      {
        products.map((product,index)=>{
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
                      <button className=' px-6 py-[2px] bg-orange-500 hover:bg-orange-800 text-white font-semibold hover:scale-105 transition-all duration-700 rounded-lg'>Add to cart</button>
                  </div>
                  

              </div>
          
          )
        })
      }
    </div>
  )
}

export default Products
