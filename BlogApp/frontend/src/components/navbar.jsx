import { Link } from "react-router-dom"
import { AuthContext } from "../context/authContext.jsx"
import { useContext } from "react"

function NavBar(){

    const {currentUser,logout} = useContext(AuthContext)
    return (
        <div className="flex w-[100%] h-full justify-evenly items-center">
            
            
            <div className="flex justify-center items-center">
                <div>
                    <img className="w-[120px] h-[80px]" src="Scribor.png"/>
                </div>
                

            </div>
            <div className="flex gap-[16px] h-full items-center">

                <div className="hover:cursor-pointer hover:text-teal-500 font-semibold font-sans">
                    <Link to="/">HOME</Link>
                </div>

                <div className="hover:cursor-pointer hover:text-teal-500 font-semibold font-sans">
                    {/* <Link to="#"> ART </Link>
                     */}
                    <Link to="/?category=art"><span>ART</span></Link>
                     
                </div>
                   
                <div className="hover:cursor-pointer hover:text-teal-500 font-semibold font-sans" >
                    <Link to="/?category=science"><span>SCIENCE</span></Link>
                </div>

                <div className="hover:cursor-pointer hover:text-teal-500 font-semibold font-sans">
                   <Link to="/?category=technology"><span>TECHNOLOGY</span></Link>
                </div>

                <div className="hover:cursor-pointer hover:text-teal-500 font-semibold font-sans">
                    <Link to="/?category=cinema"><span>CINEMA</span></Link>
                </div >

                <div className="hover:cursor-pointer hover:text-teal-500 font-semibold font-sans">
                    <Link to="/?category=design"><span>DESIGN</span></Link>
                </div>

                <div className="hover:cursor-pointer hover:text-teal-500 font-semibold font-sans">
                    <Link to="/?category=food"><span>FOOD</span></Link>
                </div>

            </div>
            

            <div className="flex gap-[16px] h-full items-center pl-3">
                    {currentUser?.username?<div className="text-black mr-1 font-semibold">
                        <span>{currentUser.username}</span>
                    </div>:""}
                    {!currentUser?.username? <div className="text-black mr-1 p-2 rounded-full hover:text-teal-500 hover:border-[1px] hover:border-solid hover:bg-white hover:border-teal-400 hover:cursor-pointer font-semibold ">
                    <Link to="/register"><span>Register</span></Link>
                    </div>:""}
                    <div className="text-black mr-1 p-2 rounded-full hover:text-teal-500 hover:border-[1px] hover:bg-white hover:border-solid hover:border-teal-400 hover:cursor-pointer font-semibold ">
                        {!currentUser?.username?<Link to="/login"><span>Login</span></Link>:< span onClick={logout}>Logout</span>}
                    </div>
                    <div className="text-white mr-2 bg-teal-400 p-2 rounded-full hover:text-teal-500 hover:bg-white hover:border-[1px] hover:border-solid hover:border-teal-400 hover:cursor-pointer  font-semibold" >
                    <Link to="/write"><span>Write</span></Link>
                    </div>

            </div>

        </div>
    )
}
export default NavBar