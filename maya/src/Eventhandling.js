import React,{Component} from 'react';

class Eventhandling extends Component{
constructor(){
    super()
    this.state={
       message: "welcome mayank"
    }
}

changeMessage=()=>{
    this.setState({
        message:"Thank You"
    })
}

render(){
    
    return(
        <div>
         <h1>{this.state.message}</h1>
         {/* <button onClick={()=>this.changeMessage()}>Click</button> */}
         <button onClick={this.changeMessage}>Click</button>
        </div>
    ) 
}

}

export default Eventhandling;