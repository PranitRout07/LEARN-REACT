import SideBar from "./sideBar";

export default function Layout(){
    return (
        <div className="w-full min-h-screen bg-slate-300 flex">

        <div className="w-[14%]">
            <div className="min-h-[20%]">
                <div className="flex justify-center w-full h-full pt-8">
                    <p className="text-2xl font-bold">EduData</p>
                </div>
                
            </div>
            <div className="min-h-[80%] text-xl font-semibold ">
                <div className="flex justify-center">
                <SideBar/>
                </div>
                
            </div>
            
        </div>

        <div className="w-[86%] mt-6 ml-6 mb-6 mr-6 rounded-2xl bg-slate-100 shadow-xl flex">
            <div className="w-[85%] m-1">
                <div className="w-full flex justify-between min-h-[10%] ">
                    <div className="p-6 " >
                        <p className="text-2xl font-bold text-slate-500">Dashboard</p>
                    </div>
                    <div className="p-6 flex space-x-4 ">
                        <div>
                            <input placeholder="Search.." className="w-full p-1 border-1 border-slate-600 "/>
                        </div>
                        <div>
                            <p>[]</p>
                        </div>
                    </div>
                </div>
                {/* cards */}
                <div className="min-h-[25%] flex justify-evenly  w-full">

                    <div className="bg-gray-700">
                            vdvds
                    </div>

                    <div className="bg-gray-700">
                        dg
                    </div>

                    <div className="bg-gray-700">
                                dgsg
                    </div>


                </div>
                <div className="min-h-[65%] flex-col p-6">

                    <div className="flex justify-between">
                        <div className="text-xl font-semibold text-slate-500">
                            <p>Teachers</p>
                        </div>
                        <div>
                            <select>
                                <option>English</option>
                                <option>Hindi</option>
                                <option>Japanese</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full">
                    <tbody className="w-full">
                    <tr>
                        <th>Professor Name</th>
                        <th>Time</th>
                        <th>Charge</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>100$/hr</td>
                    </tr>
                    <tr>
                        
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>100$/hr</td>
                    </tr>
                    <tr>
                        
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>100$/hr</td>
                    </tr>
                    <tr>
                        
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>100$/hr</td>
                    </tr>
                    </tbody>
                    </div>


                </div>
            </div>
            <div className="w-[15%] m-1 rounded-xl bg-slate-400">
                <div className="min-h-[20%] p-6 flex justify-center rounded-xl ">
                    <img src="icon.png" className="h-[80%] w-[80%] rounded-full"/>
                </div>
                <div className="min-h-[80%]">

                </div>
            </div>
        </div>


        </div>
    )
}