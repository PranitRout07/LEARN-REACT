import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Write() {
    const [value, setValue] = useState('');
    
    return (
        <div className="w-full min-h-[80vh] flex gap-5 p-2">
            <div className="flex-col space-y-5 w-[75%] h-auto">
                {/* Editing part */}
                <div className='w-full'>
                    <input 
                        placeholder="Title" 
                        className="p-2 w-full outline-none border-[1px] border-[#97979773]" 
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
                                <input type='radio' name='category' id={category} />
                            </div>
                            <div>
                                <label htmlFor={category}>{category}</label>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='border-[#97979773] border-[1px] w-full h-1/2 pl-2 pt-1 flex-col space-y-2'>
                    <div className='pb-2'>
                        <h1 className='text-3xl font-bold text-gray-600'>Publish</h1>
                    </div>

                    <div>
                        <h1 className='text-[15px] font-semibold text-gray-600'>Status</h1>
                    </div>

                    <div>
                        <h1 className='text-[15px] font-semibold text-gray-600'>Visibility</h1>
                    </div>

                    <div>
                        <input type='file' />
                    </div>

                    <div className='w-full flex justify-between pb-3'>
                        <div>
                            <button className='p-1 rounded-sm bg-white text-teal-500 border-teal-500 border-[1px]'>Save as a draft</button>
                        </div>

                        <div className='pr-3'>
                            <button className='p-1 rounded-sm bg-white text-teal-500 border-teal-500 border-[1px]'>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
