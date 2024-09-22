function Register(){
    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="flex-col p-16 space-y-5 bg-[#ffffff] shadow-lg " >
                <div>
                <input className="outline-none text-xl border-b-2 p-2" type="text" required placeholder="email"/>
                </div>
                <div>
                <input className="outline-none text-xl border-b-2 p-2" type="text" required placeholder="username"/>
                </div>
                <div>
                <input className="outline-none border-b-2 text-xl p-2" required placeholder="password" type="password"/>
                </div>
                <div>
                <button className="text-xl p-3 text-center text-white hover:scale-105 hover:bg-teal-400 bg-teal-500 w-full rounded-lg">Login</button>
                </div>
                
                
                <p className="text-center text-red-700">Error</p>
                <div className="text-center">
                <span className="text-center">Do have an account?<p>Login</p></span>
                </div>

            </div>
        </div>
    )
}

export default Register;