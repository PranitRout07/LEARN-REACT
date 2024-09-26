import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import axios from "axios"
// import { useState } from "react";

// const [curPost,setCurPost] = useState({
//     postId:'',
//     postImage:'',
//     postDescription:'',
//     postTitle:''
// })

// const singlePost = (e) =>{
//     e.preventDefault();
    
    
// }

const z = (val) =>{
    return (
        <div className="w-2/3 space-y-3">

        <div className="w-full text-5xl pb-1">
            {val.title}
        </div>

        <div className="w-full max-h-[60%] pb-1">
            {val.description}
        </div>

        <Link to={`/post/${val.id}`} ><div>
            <button  className="p-3 bg-teal-500 hover:bg-teal-400 hover:scale-105 rounded-2xl pb-1">Read More</button>
        </div></Link>

    </div>
    )
}


const y = (val) =>{
    return (
        <div className="w-1/3 flex items-center">
        <img className="w-[85%] max-h-[90%]" src={`/uploads/${val.image}`}/>
    </div>
    )
}

function Home(){

    const [posts,setPosts] = useState([])
    const category  = useLocation().search

    // console.log(category)
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const resp = await axios.get(`/api/details/posts/${category}`)
                setPosts(resp.data)
            }catch(err){
                console.log("Error while fetching posts data",err)
            }
        }

        fetchData();
    },[category])

    console.log(posts)

    // const posts = [
    //     {
    //         title:"Hello",
    //         description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae animi harum, illum asperiores ipsam amet praesentium, quasi fugiat modi magnam eos doloremque possimus veritatis ullam quo eaque neque porro optio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at iure accusamus, ut fugit eaque architecto sit fuga quae sed eligendi numquam aperiam quo deleniti sint quibusdam accusantium, perferendis beatae.",
    //         image:"https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800"
        
    //     },
    //     {
    //         title:"Demo",
    //         description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae animi harum, illum asperiores ipsam amet praesentium, quasi fugiat modi magnam eos doloremque possimus veritatis ullam quo eaque neque porro optio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at iure accusamus, ut fugit eaque architecto sit fuga quae sed eligendi numquam aperiam quo deleniti sint quibusdam accusantium, perferendis beatae.",
    //         image:"https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=800"
        
    //     },
    //     {
    //         title:"Demo2",
    //         description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae animi harum, illum asperiores ipsam amet praesentium, quasi fugiat modi magnam eos doloremque possimus veritatis ullam quo eaque neque porro optio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at iure accusamus, ut fugit eaque architecto sit fuga quae sed eligendi numquam aperiam quo deleniti sint quibusdam accusantium, perferendis beatae.",
    //         image:"https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=800"
        
    //     },
    //     {
    //         title:"Demo3",
    //         description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae animi harum, illum asperiores ipsam amet praesentium, quasi fugiat modi magnam eos doloremque possimus veritatis ullam quo eaque neque porro optio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at iure accusamus, ut fugit eaque architecto sit fuga quae sed eligendi numquam aperiam quo deleniti sint quibusdam accusantium, perferendis beatae.",
    //         image:"https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=800"
        
    //     },
    //     {
    //         title:"Hello1",
    //         description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae animi harum, illum asperiores ipsam amet praesentium, quasi fugiat modi magnam eos doloremque possimus veritatis ullam quo eaque neque porro optio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at iure accusamus, ut fugit eaque architecto sit fuga quae sed eligendi numquam aperiam quo deleniti sint quibusdam accusantium, perferendis beatae.",
    //         image:"https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=800"
        
    //     },
    //     {
    //         title:"Hello6",
    //         description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae animi harum, illum asperiores ipsam amet praesentium, quasi fugiat modi magnam eos doloremque possimus veritatis ullam quo eaque neque porro optio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at iure accusamus, ut fugit eaque architecto sit fuga quae sed eligendi numquam aperiam quo deleniti sint quibusdam accusantium, perferendis beatae.",
    //         image:"https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800"
        
    //     },
    // ]
    
    return (
        <div className="w-full h-full p-7">

            {
                posts.map((val,index)=>(
                    <div key={index}>
                   {index%2===0?<div key={index} className="flex w-full h-auto gap-[80px] ">
                        {z(val)}
                        {y(val)}

                    </div>:<div key={index} className="flex w-full h-auto ">
                        
                        {y(val)}
                        {z(val)}

                    </div>}
                    </div>
                ))
            }

        </div>
    )
}



export default Home;