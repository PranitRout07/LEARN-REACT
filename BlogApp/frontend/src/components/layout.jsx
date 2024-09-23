import React from "react";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Home from "../pages/Home";
import SinglePage from "../pages/singlePage";
import Footer from "./footer";
import Write from "../pages/Write";

function Layout(){
    return (
        <div className="min-h-[100vh] w-[100%] ">
            <div className="h-auto bg-[#ffffff] pt-3 pb-3 ">

                {/* navbar */}
                <NavBar/>
            </div >


            <div className="min-h-auto">
            {/* <Home/> */}
            {/* <SinglePage/> */}
            <Write/>
            </div>

            <div className="bg-black mt-2 mb-2">
            {/* layout */}
            <Footer/>
            </div>
        </div>
    )
}

export default Layout;