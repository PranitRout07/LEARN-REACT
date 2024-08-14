import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

//Instead of doing this , you can use loader in main.jsx for better optimization
export function Github(){
    const data = useLoaderData()
    // const [data,setData] = useState(0)
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/PranitRout07')
    //     .then((resp)=>{return resp.json()})
    //     .then((resp)=>{ setData(resp['followers'])})
    // },[data])

    return (
        <div className="text-center font-bold bg-gray-500 text-white text-4xl p-4">
            Github followers:-{data['followers']}
            {console.log("followers:-",data['followers'])}
        </div>
    )
}

export const githubInfoLoader = async()=>{
    const resp = await fetch('https://api.github.com/users/PranitRout07')
    return resp.json()

}   

//After using loader you will see that it slight lag issue while rendering the value . 