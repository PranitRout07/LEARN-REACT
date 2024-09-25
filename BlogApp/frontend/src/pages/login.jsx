import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext.jsx";
function Login(){

    const navigate = useNavigate();

    const [val,setVal] = useState({
        username:'',
        password:''
    })

    const {login,currentUser} = useContext(AuthContext)
    const [response,setResponse] = useState('')
    const handleLogin = async (e) =>{
        e.preventDefault();
        console.log("hello")

        try {
            await login(val);
            navigate("/");
            setVal({
                username:'',
                password:''
            })

        }catch(err){
            setResponse(err.response)
            setVal({
                username:'',
                password:''
            })
        }
        // axios.post("/api/auth/login",val)
        // .then((resp)=>{
            
        //     // setResponse(resp.data)
        //     navigate("/")
        //     setVal({
        //         username:'',
        //         password:''
        //     })
        // }).catch((err)=>{
        //     setResponse(err.response)
        //     setVal({
        //         username:'',
        //         password:''
        //     })
        // })
    }
    


    return (
        <div className="w-full h-[100vh] flex-col space-y-4 ">
        <div className="h-[20vh] flex justify-center text-teal-500 font-bold text-2xl items-end">
            <span>Login</span>
        </div>
    <div className="w-full h-[60vh] flex justify-center items-start rounded-sm">
            <form onSubmit={handleLogin}  className="flex-col p-20 space-y-5 bg-white shadow-lg  " name="login-form" >
                <div>
                <input className="outline-none text-xl border-b-2 p-2 " value={val.username} onChange={(e)=>setVal((prev)=>{return {...prev,username:e.target.value}})} type="text" required placeholder="username"/>
                </div>
                <div>
                <input className="outline-none border-b-2 text-xl p-2" value={val.password} onChange={(e)=>setVal((prev)=>{return {...prev,password:e.target.value}})} required placeholder="password" type="password"/>
                </div>
                <div>
                <button type="submit" className="text-xl p-3 text-center text-white hover:scale-105 hover:bg-teal-400 bg-teal-500 w-full rounded-lg">Login</button>
                </div>
                
                
                {response && response.status!==200?<p className="text-center text-red-700">{response.data}</p>:""}
                <div className="text-center">
                <span className="text-center">Don't have an account?<Link to="/register"><u className="hover:text-teal-500 font-semibold" >Register</u></Link></span>
                </div>

            </form>
        </div>
        </div>
    )
}

export default Login;