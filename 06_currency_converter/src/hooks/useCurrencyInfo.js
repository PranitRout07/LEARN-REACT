import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    //IMPORTANT : NEVER LEFT USESTATE AS NULL OR UNDEFINED, GIVE IT A TYPE
    const [data,setData] = useState({})
    // console.log("HELLO INSIDE INFO")
    useEffect(()=>{
        // console.log("INSIDE USEEFFECT")
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((resp)=>{
            // console.log("getting response",resp.json())
            return resp.json()
        })
        .then((resp)=>{
            // console.log("final response",resp)
            setData(resp[currency])
        })
    
    },[currency])
    // console.log("data passed to index",data)
    return data
}

export default useCurrencyInfo;