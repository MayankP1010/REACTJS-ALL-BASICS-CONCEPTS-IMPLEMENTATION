import React,{Component} from'react';

class SignupForm extends Component{
  constructor(){
      super()
      this.state={
          Username : '',
          Password : '',
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

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <div class="container">
          <h1>Log-In</h1>
          
         
      </div >
      <div  class="container">
                    <label>Username</label>
                    <br/>
                    <input type ='text' value={this.state.Username} onChange={this.handleUsernameChange}  />
                </div>
                <div class="container" >
                    <label>Password</label>
                    <br/>
                    <input type='password' minLength='6' value={this.state.Password} onChange={this.handlePasswordChange} />
                    
                </div>
                <button class="registerbtn" >Log-In</button>

                </form>

    )

  }


  }

  export default SignupForm;