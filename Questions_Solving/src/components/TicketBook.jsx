import React, { useState,useEffect } from 'react'






function TicketBook() {
    
    const [vipBgColor,setVipBgColor] = useState([])
    const [vipArr,setVipArr] = useState([])

    const [genBgColor,setGenBgColor] = useState([])
    const [genArr,setGenArr] = useState([])


    const [ecoBgColor,setEcoBgColor] = useState([])
    const [ecoArr,setEcoArr] = useState([])
    //general 7 x 7

    function createArr(num,name){
        const arr = []
        const color = []
        for(let i=0;i<num;i++){
            arr.push([]);
            color.push([])
            for(let j=0;j<num;j++){
                arr[i].push(`${name}:(${i+1},${j+1})`)
                color[i].push('blue')
            }
        }
        // console.log(arr,color)

        return [arr,color]
    }
    
    //vip 5 x 5
    useEffect(() => {
        const x = createArr(3, "vip");
        setVipArr(x[0])
        setVipBgColor(x[1]);
    }, []); 


    useEffect(() => {
        const x = createArr(7, "gen");
        setGenArr(x[0])
        setGenBgColor(x[1]);
    }, []); 


    useEffect(() => {
        const x = createArr(4, "eco");
        setEcoArr(x[0])
        setEcoBgColor(x[1]);
    }, []); 


    const [numOfSeatsBooked,setNumOfSeatsBooked] = useState(0)
    const [seats,setSeats] = useState([])
    

    function handleTickets(e){
        e.preventDefault();
        const val = e.target.value.split(',')
        const i = parseInt(val[0])
        const j = parseInt(val[1])
        if(e.target.name==="vip"){

            
                if(vipBgColor[i][j]==='green'){
                    return
                }

                setVipBgColor((prev)=>{

                    prev[i][j] = 'green'

                    return prev
                    
                })
    }else if (e.target.name==="general"){

        if(genBgColor[i][j]==='green'){
            return
        }

        setGenBgColor((prev)=>{

            prev[i][j] = 'green'

            return prev
            
        })

    }else if(e.target.name==="economic"){

        if(ecoBgColor[i][j]==='green'){
            return
        }

        setEcoBgColor((prev)=>{

            prev[i][j] = 'green'

            return prev
            
        })

    }
        // setBgColor(bgColor[parseInt(val[0])][parseInt(val[1])])
        if(numOfSeatsBooked<5){
            setNumOfSeatsBooked(numOfSeatsBooked  +1);
            setSeats([...seats,`${e.target.name}-${[i]}${[j]}`])
        }
        if(numOfSeatsBooked>=5){
            
            alert("You have already selected 5 seats")
        }
        
    }


    function handleSubmit(e){
        e.preventDefault();

        alert(`${seats.length} seats are booked ${seats}`)
    }

    
  return (
    <div>

        {/* VIP */}
        <h1 className='text-white w-full flex justify-center p-10'>VIP SEATS</h1>
        <div className='w-full flex justify-center items-center'>
            
        



        {
            vipArr.map((val,i)=>{
                return(
                    <div key={i} className=''>
                        {
                            val.map((v,j)=>{
                                return (
                                    <div key={j} className='p-6'>
                                        <button onClick={handleTickets} className='p-3 h-[60px] w-[55px] text-white' style={{backgroundColor:vipBgColor[i][j]}} value={`${i},${j}`} name="vip"> {v}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })
        }





        </div>


        {/* GENERAL */}
        <h1 className='text-white w-full flex justify-center p-10'>GENERAL SEATS</h1>
        <div className='w-full flex justify-center items-center '>

        

        {
            genArr.map((val,i)=>{
                return(
                    <div key={i} className=''>
                        {
                            val.map((v,j)=>{
                                return (
                                    <div key={j} className='p-6'>
                                        <button onClick={handleTickets} className='p-3 h-[60px] w-[55px] text-white' style={{backgroundColor:genBgColor[i][j]}} value={`${i},${j}`} name="general"> {v}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })
        }




        </div>


        {/* ECONOMY */}
        <h1 className='text-white w-full flex justify-center p-10'>ECONOMIC SEATS</h1>
        <div className='w-full flex justify-center items-center '>

        

        {
            ecoArr.map((val,i)=>{
                return(
                    <div key={i} >
                        {
                            val.map((v,j)=>{
                                return (
                                    <div key={j} className='p-6'>
                                        <button onClick={handleTickets} className='p-3 h-[60px] w-[55px] text-white' style={{backgroundColor:ecoBgColor[i][j]}} value={`${i},${j}`} name="economic"> {v}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })
        }




        </div>



        <div className='text-white w-full flex justify-center p-10'>
            <button className='bg-teal-300 p-3 text-black rounded-lg' onClick={handleSubmit}>Submit</button>
        </div>



    </div>
  )
}

export default TicketBook