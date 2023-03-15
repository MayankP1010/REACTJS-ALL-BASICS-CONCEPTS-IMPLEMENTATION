import React,{Component} from 'react';
import Mop2C from './Mop2C.js';

class Mop1P extends Component{                    /*{Methods as props parent} */

    constructor(){
        super()
        this.state={
           parentname : "Parent" 
        }
    }

    myparent=()=>{
        alert(`Hello  ${this.state.parentname}` )

    }

    render(){
        return(
            <div>
                <Mop2C childhandler={this.myparent}/>
            </div>
        )
    }
}

export default Mop1P;
