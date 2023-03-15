import React,{Component, component} from 'react';
import ComponentBcontext from './ComponentBcontext.js';
import userContext from './UserContext.js';

class ComponentAcontext extends Component{
    render(){
        return(
            <div>
                Component A context {this.context}
                <ComponentBcontext/>
            </div>
            
        )
    }
} 
ComponentAcontext.contextType=userContext

export default ComponentAcontext;