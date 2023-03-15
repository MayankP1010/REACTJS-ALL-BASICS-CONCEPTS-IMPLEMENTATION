import React,{Component} from 'react';
import axios from'axios';

class Reacthttppost extends Component{
    constructor(){
        super()
        this.state={
            userID:'',
            title:'',
            body:''
        }
    }

    changeHandle=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandle=(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios
        .post('https://jsonplaceholder.typicode.com/posts',this.state)
        
        .then(Response=>{
            console.log(Response)
            
        })
        .catch(error=>{
            console.log(error)
           
        })
    }
    render(){
        const{userID,title,body}=this.state
        return(
            <div>
                <form onSubmit={this.submitHandle}>
                    <div>
                    <input typr="text" name="userID" value={userID} onChange={this.changeHandle}/>
                    </div>
                    <div>
                    <input typr="text" name="title" value={title}  onChange={this.changeHandle}/>
                    </div>
                    <div>
                    <input typr="text" name="body"  value={body}  onChange={this.changeHandle}/>
                    </div>
                    <button type="submit">Submit</button>
                    
                </form>
            </div>
        )
    }
}

export default Reacthttppost;