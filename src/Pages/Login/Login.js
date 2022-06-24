import React, { Component } from 'react'
import { login } from '../../api/api';
import { validateLoginCred } from '../../utlis/validate';

const wrapperDiv = {display: 'flex', backgroundColor: 'greenyellow', width: '100%', height: '100vh',
justifyContent: 'center', alignItems:'center', textAlign: 'center', flexDirection: 'column'}

export class Login extends Component {
    constructor(){
      super();
      this.state({
        email:'',
        password:'',
        error:''
    })
    }
handleLogin() {
  const [isValid, errorMsg] = validateLoginCred(this.state.name, this.state.password);
  if(isValid) login(this.state.name, this.state.password)
  else {
    this.state({error: errorMsg})
  }

}

  render() {
    return (
      <div style={wrapperDiv}>
              <h1> Login</h1>
        <div>
            <label> Email</label>
            <input name='email' value={this.state.email} onChange={(e)=>this.setState(e.target.value)} placeholder='Email  here' type='email' />
        </div>
        <div>
            <label> password</label>
            <input name='password' value={this.state.password} onChange={(e)=>this.setState(e.target.value)}  placeholder='Password here' type='text' />
        </div>
        <div> {this.error && <small> {this.error}</small> }
             <button onClick={this.handleLogin} disabled={!this.isValid}> Login</button>
        </div>
        </div>
    )
  }
}

export default Login