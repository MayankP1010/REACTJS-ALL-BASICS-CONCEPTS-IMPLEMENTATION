import React,{Component} from 'react';

class Refsdemo extends Component{
    constructor(){
        super()
        this.inputref=React.createRef()
    }

    componentDidMount(){
        this.inputref.current.focus()
        console.log(this.inputref)
    }



handleClick=()=>{
    alert(this.inputref.current.value)
}

    render(){
        return(
            <div>
                <input type="text" ref={this.inputref}/>
                <button onClick={this.handleClick}>CLick</button>
            </div>
        )

    }
}

export default Refsdemo;