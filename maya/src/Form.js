import React,{Component} from'react';

class Form extends Component{
    constructor(){
        super()
        this.state={
            Username : '',
            Password : '',
            Gender : '',
            Toggle:false,

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
    
    handleGender=(event)=>{
        this.setState({
            Gender : event.target.value
        })
    }
    handleSubmit=(event)=>{
        if(this.state.Password.length<5)
            return false
        
        
            alert(`Registration Successful!! ${this.state.Username}`)
        
    }
    
    render(){
        return(
            
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h2>Registration Form</h2>
                </div>
                <div>
                    <label>Name</label>
                    <input type ='text' value={this.state.Username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' minLength='6' value={this.state.Password} onChange={this.handlePasswordChange}/>
                    {this.state.toggle}
                </div>
                <div>
                    <label>Gender</label>
                    <select value={this.state.Gender} onChange={this.handleGender}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;