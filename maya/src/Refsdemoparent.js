
import React,{Component} from 'react';
// import Reffunctiondemo from './Functionrefdemo';
 import Refsdemochild from './Refsdemochild.js';

class Refsdemoparent extends Component{
    constructor(props){
        super(props)
        this.componentRef=React.createRef()
    }
    clickHandle=()=>{
         this.componentRef.current.focusInput()
        // this.componentRef.current.focus()
    }
    render(){
        return(
            <div>
                <Refsdemochild ref={this.componentRef}/>
                <button onClick={this.clickHandle}>Focus</button>
            </div>
        )
    }
}
export default Refsdemoparent;