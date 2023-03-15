import React,{Component} from 'react';
import Counterhoc from './Counterhoc';

class LetterCounterhoc extends Component{
    render(){
        const {count,incrementCounter}=this.props

        return(
            <h2 onMouseOver={incrementCounter}>hi{count}nut</h2>
        )
    }
}

export default Counterhoc(LetterCounterhoc,10);