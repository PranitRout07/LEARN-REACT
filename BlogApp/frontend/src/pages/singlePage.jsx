import Menu from "./menu"
import { useState,useEffect, useContext } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import moment from "moment"
import { AuthContext } from "../context/authContext.jsx";
import axios from "axios";

export default function SinglePage(){

    
    const {currentUser}  = useContext(AuthContext)
    const navigate  = useNavigate()
    const [post,setPost] = useState({})
    const location  = useLocation()
    console.log(location.pathname.split("/")[2],"loc")
    const postID = location.pathname.split("/")[2]
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const resp = await axios.get(`/api/details/post/${postID}`)
                setPost(resp.data)
            }catch(err){
                console.log("Error while fetching posts data",err)
            }
        }

        fetchData();
    },[postID])

    const handleDelete = async (e)=>{
        e.preventDefault();
        try{
            const resp = await axios.delete(`/api/details/post/${postID}`)
            console.log(resp.data)
            navigate("/")

        }catch(err){
            console.log(err)
        }
        

    }
    return(
        <div className="w-full h-full pt-3 flex gap-12">
            <div className="w-[75%] h-full flex-col space-y-3">
                <div className="w-full">
                    {/* image banner */}
                    <div className="w-full max-h-[25%]">
                        <img className="w-[100%] rounded-lg shadow-2xl" src={post?.image}/>
                    </div>
                </div>

                <div className="flex gap-2 my-auto items-center">
                    <div>
                        <img className="rounded-full h-14 w-14"  src={post.img}/>
                    </div>
                    <div className="flex-col">
                        <div className="font-semibold">
                            <p>{post.username}</p>
                        </div>

                        <div className="">
                            <p>Posted { moment(post.created_time).fromNow()}</p>
                        </div>

                        
                    </div>


                  {post.username===currentUser?.username && currentUser!==null && (<div className="flex gap-2">
                            <div>
                                <Link to={`/write/?edit=${postID}`}><img className="h-5 w-7" src="https://w7.pngwing.com/pngs/818/878/png-transparent-computer-icons-editing-symbol-symbol-miscellaneous-angle-text.png"/></Link>
                            </div>

                            <div>
                            <img onClick={handleDelete} className="hover:cursor-pointer h-5 w-7" src="trash.png"/>

                            </div>
                        </div>)}
                    {/* who posted , posted before (option come for delete and update for the same user only)*/}
                </div>

                <div className="text-6xl font-semibold">
                    <p>{post?.title}</p>
                    {/* blog title */}
                </div>


                <div className="font-sans">
                    <p>
                        {post?.description}
                    </p>
                    {/* description */}
                </div>
            </div>

            <div className="w-[25%] h-full">

                <Menu/>
                {/* list of suggested posts */}
            </div>



        </div>
    )
}