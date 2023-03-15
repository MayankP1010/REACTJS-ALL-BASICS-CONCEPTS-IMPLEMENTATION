import React,{Component} from 'react';
import {UserConsumer} from './UserContext.js';

class ComponentBcontext extends Component{
    render(){
        return(
            <UserConsumer>
                {username=>{
                    return <div>Hello {username}</div>
                }}
            </UserConsumer>
        )
    }


}
export default ComponentBcontext;