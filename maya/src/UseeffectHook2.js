import React,{useState,useEffect} from 'react';
import axios from'axios';
function  UseeffectHook2(){
    const[posts,setPosts]=useState([])
    

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response=>{
            console.log(Response)
            setPosts(Response.data)
        })
        .catch(error=>{
            console.log(error)
            
        })
    },[]
    )

    return(
        <div>
            <ul>
                {posts.map(post=>(
                    <li key={post.id}>{post.title}</li>

                )

                )}
            </ul>
        </div>
    )
}

export default UseeffectHook2;