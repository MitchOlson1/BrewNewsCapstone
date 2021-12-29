import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './login.css'





export default class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }
    

            
        
handleChange = event => {    
    this.setState({     
        [event.target.name] : event.target.value        
    });
}
              
        
handleSubmit = async event => {
    event.preventDefault();
             
        
await axios ({
    method:'post',
    url:"http://127.0.0.1:8000/api/auth/login/",
    data:{          
        "username": this.state.username,
        "password": this.state.password,                               
    }
    })
    .then(response => localStorage.setItem('token', response.data.token));

    window.location="/home"
}

render(){
    return (
    <div>
        <body>
            <center><h3>Login</h3></center>
            <form onSubmit={this.handleSubmit}>
            <center><label for="username">User Name:</label><input name="username" type="text" value={this.state.username} onChange={this.handleChange}></input></center>
            <center><label for="password">Password:</label><input name="password" type="password" value={this.state.password} onChange={this.handleChange}></input></center>
            <center><button type="submit">Login</button></center>
            </form>
        </body>
    </div>
         )
    }
             
}