import React, { Component } from 'react'
import { login } from '../../api/api';
import { validateLoginCred } from '../../utlis/validate';
import { history} from "react-router-dom";
import classes from './login.module.css'
const wrapperDiv = {display: 'flex', backgroundColor: 'greenyellow', width: '100vw', height: '100vh',
justifyContent: 'center', alignItems:'center', textAlign: 'center'}

export class Login extends Component {

    constructor(){
      super();
      this.state ={
        email:'',
        password:'',
        error:null
      }
    }

emailHandler = e => {
  let email = e.target.value;
  this.setState({
    email,
  });
}
passwordHandler = e => {
  let password = e.target.value;
  this.setState({
    password,
  });
}

handleLogin(){
  const {email, password} = this.state;
  const fromData= {email, password}
  const [isValid, errorMsg] = validateLoginCred(email, password);
  if(isValid) {
    this.setState({error: null})
   let result= login(fromData);
   if(result) {
    if(result?.error) {
     openAlertMessage(result?.message)
  }
  else {
      const {userDetails} = result?.data;
      localStorage.setItem('user', JSON.stringify(userDetails))
      history.push('/')
  }
   }
  }else {
    this.setState({error: errorMsg})
  }

}
  render() {

    const {email, password, error} = this.state;
    return (
      <div style={wrapperDiv}>
          <div className={classes.loginBox}>
          <h1> Login</h1>
        <div>
            <label> Email</label>
            <input name='email' value={email} onChange={this.emailHandler } placeholder='Email  here' type='email' />
        </div>
        <div>
            <label> password</label>
            <input name='password' value={password} onChange={this.passwordHandler }  placeholder='Password here' type='text' />
        </div>
        <div> 
          <div>{error && <small style={{color:'red'}}> {error}</small> }</div>
             <button onClick={this.handleLogin.bind(this)} > Login</button>
        </div>
          </div>
        </div>
    )
  }
}

export default Login