import React,{useState} from 'react';

function  UsestateHook3(){
    const [name,setName]=useState({Firstname :'' , Lastname:''})
    return(
        <form>
            <input type="text" value={name.Firstname} onChange={e=>setName({...name,Firstname:e.target.value})}/>
            <input type="text" value={name.Lastname} onChange={e=>setName({...name,Lastname:e.target.value})}/>
            <h1>Your Firstname is:{name.Firstname}</h1>
            <h1>Your Lastname is:{name.Lastname}</h1>
        </form>
       
    )
}

export default UsestateHook3;