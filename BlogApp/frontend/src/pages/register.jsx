import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Register(){


    const navigate = useNavigate();

    const [val,setVal] = useState({
        email:'',
        username:'',
        password:''
    })
    const [response,setResponse] = useState('')
    const handleRegister = (e) =>{
        e.preventDefault();
        // if (!val.email || !val.username || !val.password) {
        //     alert('All fields are required');
        //     return;
        // }
        axios.post("/api/auth/register",val)
        .then((resp)=>{
            // setResponse(resp.data)
            navigate("/login")
            setVal({
                email:'',
                username:'',
                password:''
            })
        }).catch((err)=>{
            setResponse(err.response)
            setVal({
                email:'',
                username:'',
                password:''
            })
        })
    }

    console.log("response",(response.status))

    return (
        <div className="w-full h-[100vh] flex-col space-y-4 ">
                <div className="h-[20vh] flex justify-center text-teal-500 font-bold text-2xl items-end">
                    <span>Register</span>
                </div>
            <div className="w-full h-[60vh] flex justify-center items-start rounded-sm">
 
                {/* <div className="flex-col p-20 space-y-5 bg-gradient-to-r from-white via-teal-100 to-cyan-100 shadow-lg " > */}
                    <form onSubmit={handleRegister} className="flex-col p-20 space-y-5 bg-white shadow-lg" name="register-form">
                    <div>
                    <input className="outline-none text-xl border-b-2 p-2" type="text" value={val.email} onChange={(e)=>{setVal((prev)=>{return {...prev,email:e.target.value}})}} required placeholder="email"/>
                    </div>
                    <div>
                    <input className="outline-none text-xl border-b-2 p-2" type="text" value={val.username} onChange={(e)=>{setVal((prev)=>{return {...prev,username:e.target.value}})}} required={true} placeholder="username"/>
                    </div>
                    <div>
                    <input className="outline-none border-b-2 text-xl p-2" required placeholder="password" value={val.password} onChange={(e)=>{setVal((prev)=>{return {...prev,password:e.target.value}})}} type="password"/>
                    </div>
                    <div>
                    <button className="text-xl p-3 text-center text-white hover:scale-105 hover:bg-teal-400 bg-teal-500 w-full rounded-lg" >Register</button>
                    </div>
                    
                    
                    {response && response.status!==200?<p className="text-center text-red-700">{response.data}</p>:""}
                    <div className="text-center">
                    <span className="text-center">Do have an account?<Link to="/login"><p className="hover:text-teal-500 font-semibold">Login</p></Link></span>
                    </div>
                    {console.log(response.status,"response")}

                    </form>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Register;