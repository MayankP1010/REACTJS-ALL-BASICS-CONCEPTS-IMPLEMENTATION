import React,{Component} from 'react';


class RenderPropsletter extends Component{
    render(){
        const {count,incrementCounter}=this.props

        return(
            <h2 onMouseOver={incrementCounter}>hi{count}nut</h2>
        )
    }
}

export default RenderPropsletter;