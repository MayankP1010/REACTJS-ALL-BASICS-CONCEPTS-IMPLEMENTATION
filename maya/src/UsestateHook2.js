import React,{useState} from 'react';


function  UsestateHook2(){
    const initial=0
    const [count,setCount]=useState(initial)

    return(
        <div>
            count:{count}
        <button onClick={()=>setCount(initial)}>Reset</button>
        <button  onClick={()=>setCount(prevcount=>prevcount+1)}>Increment</button>
        <button onClick={()=>setCount(prevcount=>prevcount-1)}>Decrement</button>
        </div>
       
    )
}

export default UsestateHook2;