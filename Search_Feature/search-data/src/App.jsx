import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { userData } from './userData'
import axios from 'axios'

function App() {
  const [querry,setQuerry] = useState('')
  const [userData,setUserData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/")
    .then((resp)=>{console.log(resp.data); setUserData(resp.data)})
  },[userData])

  const keys = ['name','language','bio']
  function Search(){
    return(
      <>
      {
    keys.some((key)=>{
      userData.filter(user=>user[key].toLowerCase().includes(querry)).map((data,index)=>(
        <tr key={index}>
          <td>{data.name}</td>
          <td>{data.language}</td>
          <td>{data.bio}</td>
        </tr>
      ))
    })
      }
      
      </>

  )
  }


  
 
  // console.log(userData.filter(user=>user.name.toLowerCase().includes(querry)))
  return (
    <>
    
      
      <input type='text' placeholder='Search...' onChange={(e)=>{setQuerry(e.target.value)}} className='p-4 m-5 w-1/2 text-2xl rounded-lg'/>
  

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Language</th>
                <th>Bio</th>
              </tr>
              </thead>
              <tbody>
              {/* {userData.filter(user=>user.name.toLowerCase().includes(querry)).map((data,index)=>(
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.language}</td>
                <td>{data.bio}</td>
              </tr>
            ))} */}
            <Search/>
            </tbody>
        </table>

          
       
      
    
    </>
  )
}

export default App
