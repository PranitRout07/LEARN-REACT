import { useEffect, useState } from "react"
import axios from "axios"

export default function Menu({category,curPost}){

    const [allPosts,setAllPosts] = useState([])
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        const fetchALLPosts = async()=>{
            const resp = await axios.get("/api/details/posts")
            console.log(resp.data)
            setAllPosts(resp.data)
        }

        fetchALLPosts();
    },[])
    // console.log(allPosts)
    useEffect(()=>{

        setPosts(()=>{
            const filteredPosts = allPosts.filter((val)=>{
                // console.log("this value",val.category.toLowerCase(),category.toLowerCase())
                return val.category?.toLowerCase()===category?.toLowerCase() 
            })
        console.log(filteredPosts,"filter")
            return [...posts,filteredPosts]
        })

    },[allPosts])


  
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
        <div className="w-full h-full">
            {
                posts.map((val,index)=>(
                    <div key={index} className="flex-col gap-2 mt-2">
                        <div>
                            <img src={val.image} className="w-full h-[200px]"/>
                        </div>
                       
                        <div className="text-3xl font-semibold flex justify-start">

                            <p>{val.title}</p>
                        </div>

                        <div className="w-full mt-3">
                            <button className="p-1 rounded-sm bg-white text-teal-500 border-teal-500 border-[1px] ">Read More</button>
                            </div>

                    </div>
                ))
            }

        </div>
    )
}