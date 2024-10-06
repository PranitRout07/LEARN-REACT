import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Wordle() {
    const [words,setWords] = useState([])
    const [randomWord,setRandomWord] = useState('')
    const [emptyArr,setEmptyArr] = useState([])
    const [values,setValues] = useState([])
    const [mainWord,setMainWord] = useState('')
    const [bgColor,setBgColor] = useState([])
    const [str,setStr]=  useState('')
    const [isCorrect,setIsCorrect] = useState(false)


    function createArr(num){
        const arr = []
        const val = []
        const color = []
        for(let i=0;i<num-1;i++){
            arr.push([]);
            val.push([]);
            color.push([]);
            for(let j=0;j<num;j++){
                arr[i].push(`(${i+1},${j+1})`)
                val[i].push("");
                color[i].push('white');
            }
        }
        return [arr,val,color]
    }

    
    useEffect(()=>{
        const fetchData = async()=>{
            const resp = await axios.get("/api/fe/wordle-words");
            setWords(resp.data)
        }

        fetchData();
    },[])

    useEffect(()=>{
        let [arr,val,color] = createArr(6)
        setEmptyArr(arr);
        setValues(val)
        setBgColor(color)
        
    },[])

    

    useEffect(()=>{
        if(words.length>0){ 
        setMainWord(()=>{
            let random = Math.floor((Math.random()*1000)%words.length)
            console.log(random)
            setMainWord(words[random])
        })
    }
    },[words,emptyArr])
    

    const handleOnChange = (e) =>{
        let id = e.target.id.split(",")
        let row = parseInt(id[0])
        let col = parseInt(id[1])
        setValues((prev)=>{
            let updateDetails = [...prev]
            updateDetails[row][col] = e.target.value 
            return updateDetails
        })

        for(let i=0;i<mainWord.length;i++){
            if(e.target.value.toLocaleLowerCase()===mainWord[i].toLocaleLowerCase()){
                setBgColor((prev)=>{
                    let updateDetails = [...prev]
                    updateDetails[row][col] = 'orange'
                    return updateDetails
                })
                // setBgColor('orange')
            }
        }

        
       setStr(str + e.target.value);
    }

    useEffect(()=>{
       
        if(str.length===5){
            if(str.toLocaleLowerCase()===mainWord.toLocaleLowerCase()){
                
                setIsCorrect(true)
            }
            setStr('')
        }

        
    },[str])

    function handlePlayAgain(e){
        e.preventDefault();
        setIsCorrect(false)
        setMainWord('')
        let [arr, val, color] = createArr(6);
        setEmptyArr(arr);
        setValues(val);
        setBgColor(color);

        

    }

    console.log(mainWord)

  return (
    <div className='min-h-screen w-full flex justify-center items-center'>

        <div className='flex-col'>
        <h1 className='text-white font-bold text-4xl flex justify-center'>WORDLE</h1>
            <div className='flex'>

            
        {
            emptyArr.map((val,i)=>{
                return (
                    
                    <div className='p-5' key={val}>
                        {val.map((v,j)=>{
                            return (
                                
                            <input className='p-4 flex outline-none m-4 h-[60px] w-[60px]' id={`${i},${j}`} value={values[i][j]} onChange={handleOnChange} style={{backgroundColor:bgColor[i][j]}}  key={v} placeholder=''/>
                                
                            )
                        })}
                    </div>
                )
            })
        }

        </div>
        
        
        {isCorrect?<h1 className='text-green-400 font-bold text-4xl flex justify-center'>Correct</h1>:""}
        {isCorrect?<span className='flex justify-center pt-3'><button className='px-3 py-2  bg-orange-400 hover:bg-orange-500 rounded-lg text-white hover:scale-105 ' onClick={handlePlayAgain}>Play Again</button></span>:""}
        </div>
    </div>
  )
}

export default Wordle