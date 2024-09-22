import { Link } from "react-router-dom"

function NavBar(){
    return (
        <div className="flex w-[100%] h-full justify-between items-center">
            <div className="">
                <img className="w-[120px] h-[80px]" src="Scribor.png"/>
            </div>
            <div className="flex gap-[16px] h-full items-center">

                <div className="hover:cursor-pointer">
                    {/* <Link to="#"> ART </Link>
                     */}
                     <span>ART</span>
                </div>
                   
                <div className="hover:cursor-pointer " >
                    <span>SCIENCE</span>
                </div>

                <div className="hover:cursor-pointer">
                    <span>TECHNOLOGY</span>
                </div>

                <div className="hover:cursor-pointer">
                    <span>CINEMA</span>
                </div >

                <div className="hover:cursor-pointer">
                    <span>DESIGN</span>
                </div>

                <div className="hover:cursor-pointer">
                    <span>FOOD</span>
                </div>
                <div className="hover:cursor-pointer font-bold">
                    <span>Login</span>
                </div>
                <div className="text-white mr-2 bg-teal-300 p-2 rounded-full hover:text-teal-500 hover:bg-white hover:border-1 hover:border-solid hover:border-teal-400 hover:cursor-pointer" >
                    <span>Write</span>
                </div>

            </div>

        </div>
    )
}
export default NavBar