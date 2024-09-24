import { Link } from "react-router-dom"
import { AuthContext } from "../context/authContext.jsx"
import { useContext } from "react"

function NavBar(){

    const {currentUser} = useContext(AuthContext)
    return (
        <div className="flex w-[100%] h-full justify-evenly items-center">
            
            
            <div className="">
                <img className="w-[120px] h-[80px]" src="Scribor.png"/>
            </div>
            <div className="flex gap-[16px] h-full items-center">

                <div className="hover:cursor-pointer hover:text-teal-500">
                    {/* <Link to="#"> ART </Link>
                     */}
                     <Link to="/"><span>ART</span></Link>
                     
                </div>
                   
                <div className="hover:cursor-pointer hover:text-teal-500" >
                    <span>SCIENCE</span>
                </div>

                <div className="hover:cursor-pointer hover:text-teal-500">
                    <span>TECHNOLOGY</span>
                </div>

                <div className="hover:cursor-pointer hover:text-teal-500">
                    <span>CINEMA</span>
                </div >

                <div className="hover:cursor-pointer hover:text-teal-500">
                    <span>DESIGN</span>
                </div>

                <div className="hover:cursor-pointer hover:text-teal-500">
                    <span>FOOD</span>
                </div>

            </div>
            

            <div className="flex gap-[16px] h-full items-center pl-3">
                    {currentUser?.username?<div className="text-black mr-1 font-semibold">
                        <span>{currentUser.username}</span>
                    </div>:""}
                    <div className="text-black mr-1 p-2 rounded-full hover:text-teal-500 hover:border-[1px] hover:border-solid hover:bg-white hover:border-teal-400 hover:cursor-pointer font-semibold ">
                    <Link to="/register"><span>Register</span></Link>
                    </div>
                    <div className="text-black mr-1 p-2 rounded-full hover:text-teal-500 hover:border-[1px] hover:bg-white hover:border-solid hover:border-teal-400 hover:cursor-pointer font-semibold ">
                        {!currentUser?.username?<Link to="/login"><span>Login</span></Link>:<Link to="/logout"><span>Logout</span></Link>}
                    </div>
                    <div className="text-white mr-2 bg-teal-400 p-2 rounded-full hover:text-teal-500 hover:bg-white hover:border-[1px] hover:border-solid hover:border-teal-400 hover:cursor-pointer  font-semibold" >
                    <Link to="/write"><span>Write</span></Link>
                    </div>

            </div>

        </div>
    )
}
export default NavBar