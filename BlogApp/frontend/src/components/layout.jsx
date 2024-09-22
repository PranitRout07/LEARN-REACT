import React from "react";
import NavBar from "./navbar";
import Login from "../pages/login";
import Home from "../pages/home";

function Layout(){
    return (
        <div className="min-h-[100vh] w-[100%] ">
            <div className="h-auto bg-fuchsia-50 pt-3 pb-3 ">

                {/* navbar */}
                <NavBar/>
            </div >


            <div className="min-h-auto">
            <Home/>
            </div>

            <div className="bg-black">
            {/* layout */}
            </div>
        </div>
    )
}

export default Layout;