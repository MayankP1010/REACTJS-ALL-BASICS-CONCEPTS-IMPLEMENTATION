import React,{Component} from 'react';


class RenderPropsclick extends Component{
    render(){
        const {count,incrementCounter}=this.props

        return(
            <button onClick={incrementCounter}>{this.props.name}Click{count}times</button>
        )
    }
}

export default RenderPropsclick;