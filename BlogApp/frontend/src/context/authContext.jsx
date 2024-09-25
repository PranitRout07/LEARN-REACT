import {createContext, useEffect, useState } from "react";
import axios from "axios"

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    
    const login = async (inputs) =>{
        const res = await axios.post("/api/auth/login",inputs);
        console.log(res,"cur")
        setCurrentUser(res.data)
    }

    const logout = async (inputs) => {
        // setCurrentUser(null);
        await axios.post("/api/auth/logout");
        setCurrentUser(null);
        
    }

    useEffect(()=>{
        console.log("CUR USER",currentUser)
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser])


    return (
        <AuthContext.Provider value={{currentUser,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}