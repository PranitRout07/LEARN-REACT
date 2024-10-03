import { useEffect, useState } from "react"


const Carousel  = ()=>{


    const images = [
        "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3538558/pexels-photo-3538558.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3538721/pexels-photo-3538721.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]

    const [curImg,setCurImg] = useState(0)

    const handlePrev = ()=>{
        // e.preventDefault();
        if(curImg===0){
            setCurImg(images.length - 1)
        }else{
            setCurImg(curImg-1)
        }
    }

    const handleNext = () => {
        // e.preventDefault();
        if(curImg===images.length-1){
            setCurImg(0)
        }else{
            setCurImg(curImg+1)
        }
    }


    useEffect(()=>{
        const timer = setInterval(()=>{
            handleNext();
        },3000)

        return()=>{
            clearInterval(timer)
        }
    })

    return(
        <div className="flex space-x-12 justify-center min-h-screen w-full items-center">
            <div>
                <button onClick={handlePrev}><img className="h-[30px] w-[40px]" src="/prev.svg"/></button>
            </div>
            <div className="flex">
                    {
                        images.map((img,index)=>{
                            return (
                            <div className="flex" key={img}>
                                <img className={"h-[500px] w-[700px] " + (curImg===index?"block":"hidden")}  src={img}/>
                            </div> 
                            )
                        })
                    }

        
            </div>


            <div>
                <button onClick={handleNext}><img className="h-[30px] w-[40px]" src="/next.svg"/></button>
            </div>

        </div>
    )
}

export default Carousel;