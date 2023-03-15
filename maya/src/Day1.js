import React,{Component} from'react';
import axios from'axios';


class Day1 extends Component{
    constructor(){
        super()
        this.state={
            Username : '',
            Password : '',
            Phone : '',
            Confirmpassword:'',
            
            
            

        }
    }

     handleUsernameChange=(event)=>{
        this.setState({
            Username : event.target.value
        })
    }
     handlePasswordChange=(event)=>{
        this.setState({
            Password : event.target.value
        })
    }
     handleConfirmPasswordChange=(event)=>{
        if (event.target.value !== this.state.password) {
            // message.error('error');
        this.setState({
            Confirmpassword : event.target.value
        })
    }
}
    
     handlePhone=(event)=>{
        this.setState({
            Phone : event.target.value
        })
    }
      handleSubmit=(event)=>{
        alert(`Registration Successful!! ${this.state.Username}`)
        // if(this.state.password !== this.state.confirmPassword){
        //     // message.error("The passwords doesn't match")
        //     return false; 
        // }
        // else return true; 
        event.preventDefault()
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
        return(
            
            <form onSubmit={this.handleSubmit}>
                <div class="container">
                    <h1>LAKSHYA</h1>
                    <h3>Sign-In</h3>
                   
                </div >
                <div  class="container">
                    <label>Username</label>
                    <br/>
                    <input type ='text' value={this.state.Username} onChange={this.handleUsernameChange} />
                </div>
                <div >
                    <label>Password</label>
                    <br/>
                    <input type='password' minLength='6' value={this.state.Password} onChange={this.handlePasswordChange}/>
                    
                </div>
                <div  class="container" >
                    <label>Confirm Password</label>
                    <br/>
                    <input type='password' minLength='6' value={this.state.ConfirmPassword} onChange={this.handleConfirmPasswordChange}/>
                    
                </div>
                <div  class="container" >
                <label>Phone</label>
                <br/>
                    <input type ='text' value={this.state.Phone} onChange={this.handlePhone} />
                </div >
                <button class="registerbtn">Submit</button>
            </form>
        )
    }
}

export default Day1;