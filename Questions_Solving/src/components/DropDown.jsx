import React, { useState } from 'react'


function DropDown() {
    const countries = [
        {
            name:"India",
            value: 'IN',
            cities:["Delhi","Mumbai"]
        },
        {
            name:"Japan",
            value: 'JP',
            cities:["Tokyo","Shibuya"]  
        },
        {
            name:"Switzerland",
            value: 'SZ',
            cities:["Old Town","Zurich"]
        }
    ]


const [isClicked,setIsClicked] = useState([])
// console.log((isClicked[0].split(",")))
  
  return (
    <div>
        <select onChange={(e)=>setIsClicked([e.target.value][0].split(","))} >
            {countries.map((val,index)=>{
                return (
                    
                    <option key={index} value={val.cities}   >
                       {val.name}
                    </option>
                )
            })}
        </select>

        {isClicked.length>0?<select>
            {
                isClicked.map((val,index)=>{
                    return(
                        <option key={index}>
                            {val}
                        </option>
                    )
                })
            }
        </select>:""}
    </div>
  )
}

export default DropDown