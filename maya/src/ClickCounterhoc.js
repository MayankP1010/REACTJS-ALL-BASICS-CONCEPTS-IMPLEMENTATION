import React,{Component} from 'react';
import Counterhoc from './Counterhoc';

class ClickCounterhoc extends Component{
    render(){
        const {count,incrementCounter}=this.props

        return(
            <button onClick={incrementCounter}>Click{count}times</button>
        )
    }
}

export default Counterhoc(ClickCounterhoc,5);