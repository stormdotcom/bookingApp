import React, { Component } from 'react'
import { login } from '../../api/api';
import { validateLoginCred } from '../../utlis/validate';

const wrapperDiv = {display: 'flex', backgroundColor: 'yellow', width: '100%', height: '100vh',
justifyContent: 'center', alignItems:'center', textAlign: 'center', flexDirection: 'column' }


export class SignUp extends Component {
    constructor(){
        super();
        this.state({
          email:'',
          password:'',
          error:''
      })
      }

      handleSignUp() {
        const [isValid, errorMsg] = validateSignUpCred(this.state.name, this.state.password);
        if(isValid) login(this.state.name, this.state.password)
        else {
          this.state({error: errorMsg})
        }
      
      }
  render() {
    return (
        <div style={wrapperDiv}>
        <h1> SignUp</h1>
        <div>
            <label> Email</label>
            <input name='email' placeholder='Email Enter here' type='email' />
        </div>
        <div>
            <label> Username</label>
            <input name='username' placeholder='User Name Enter here' type='text' />
        </div>
        <div>
            <label> password</label>
            <input name='password' placeholder='Password' type='text' />
        </div>
        <div>
            <button onClick={this.handleSignUp}> Sign Up</button>
        </div>
        </div>
    )
  }
}

export default SignUp