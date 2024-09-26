import React, { useContext, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AuthContext } from "../context/authContext.jsx"
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Write() {
    const location = useLocation()
    const [value, setValue] = useState('' || location?.state.description);
    const [title,setTitle] = useState('' || location?.state.title)
    const [cat,setCat] = useState('' || location?.state.category)
    const [file, setFile] = useState(null);
    const navigate =  useNavigate()
    console.log(value)

    
    console.log(location)

    const {currentUser} = useContext(AuthContext)

    useEffect(()=>{
        const redirectToHome = () =>{
            if(currentUser===null){
                navigate("/")
            }
        }
        redirectToHome();
    },[currentUser])


    const upload = async () =>{
        try{
            const formData = new FormData();
            formData.append("file",file,formData)
            const resp = await axios.post("/api/upload",formData)
            // console.log(resp.data)
            return resp.data

        }catch(err){
            console.log(err)
        }
    }


    const handlePublish = async (e)=>{
        e.preventDefault();
        try{
        const imageUrl  = await upload();
        const data = {
            title:title,
            description:value,
            category:cat,
            uid:currentUser.id,
            image:imageUrl,
        }
        // console.log(data,"data")

        

            const resp = await axios.post("/api/details/post",data)
            console.log(resp)
            navigate("/")
        }
        catch(err){
            console.log(err)
        }
    }


console.log(location.search.split("=")[1],"id----")
    const handleUpdate = async (e)=>{
        e.preventDefault();
        try{
        const imageUrl  = await upload();
        const data = {
            title:title,
            description:value,
            category:cat,
            uid:currentUser.id,
            image:imageUrl 
        }
        
            const resp = await axios.put(`/api/details/post/${location.search.split("=")[1]}`,data)
            console.log(resp)
            navigate("/")
        }
        catch(err){
            console.log(err)
        }
    }

    
    return (
        <div className="w-full min-h-[80vh] flex gap-5 p-2">
            <div className="flex-col space-y-5 w-[75%] h-auto">
                {/* Editing part */}
                <div className='w-full'>
                    <input 
                        placeholder="Title" 
                        className="p-2 w-full outline-none border-[1px] border-[#97979773]"
                        value={title} onChange={(e)=>{setTitle(e.target.value)}} 
                    />
                </div>

                <div className='w-full h-auto'>
                    <ReactQuill 
                        theme="snow" 
                        value={value} 
                        onChange={setValue} 
                        className='h-[63vh]' 
                    />
                </div>
            </div>

            <div className='w-[25%] h-full flex-col space-y-7'>
                {/* Publish buttons, upload image buttons */}
                <div className='border-[#97979773] border-[1px] w-full h-1/2 pl-2 pt-1'>
                    <div>
                        <h1 className='text-3xl font-bold text-gray-600'>Category</h1>
                    </div>

                    {["Art", "Science", "Technology", "Cinema", "Design", "Food"].map((category, index) => (
                        <div className='flex gap-1 p-1 text-teal-500 font-semibold' key={index}>
                            <div>
                                <input type='radio' name='category' id={category} checked={category===cat} onClick={(e)=>{setCat(e.target.id)}}/>
                            </div>
                            <div>
                                <label htmlFor={category}>{category}</label>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='border-[#97979773] border-[1px] w-full h-1/2 pl-2 pt-1 flex-col space-y-2'>
                    <div className='pb-2 ' >
                        <h1 className='text-3xl font-bold text-gray-600'>Publish</h1>
                    </div>

                    <div>
                        <h1 className='text-[15px] font-semibold text-gray-600'>Status</h1>
                    </div>

                    <div>
                        <h1 className='text-[15px] font-semibold text-gray-600'>Visibility</h1>
                    </div>

                    <div>
                        <input type="file" id="file" name="" onChange={(e) => setFile(e.target.files[0])} />
                    </div>

                    <div className='w-full flex justify-between pb-3'>
                        <div>
                            <button className='p-1 rounded-sm bg-white text-teal-500 border-teal-500 border-[1px]'>Save as a draft</button>
                        </div>

                        <div className='pr-3'>
                            {location.search===""?<button onClick={handlePublish} className='p-1 rounded-sm bg-white text-teal-500 border-teal-500 border-[1px] hover:cursor-pointer hover:scale-105'>Publish</button>:<button onClick={handleUpdate} className='p-1 rounded-sm bg-white text-teal-500 border-teal-500 border-[1px] hover:scale-105 hover:cursor-pointer'>Update</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
