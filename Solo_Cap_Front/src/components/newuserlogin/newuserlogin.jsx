import React from 'react';
import './newuserlogin.css';
import axios from 'axios';
import { useState } from 'react';



export default class NewUserLogin extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        brewery_associated_with: ''
        
      }
    
      handleChange = event => {
        this.setState({ 
            [event.target.name] : event.target.value
        });
      }
          
    
      handleSubmit = async event => {
        event.preventDefault();
         
    
        await axios ({
            method:"post", 
            url:"http://127.0.0.1:8000/api/auth/register/",
            data:{  
                "username": this.state.username, 
                "password": this.state.password,  
                "email": this.state.email,     
                "first_name": this.state.first_name,
                "last_name": this.state.last_name,
                "brewery_associated_with": this.state.brewery_associated_with

                
                
                
            }
        })
        window.location="/login"
      }
    
render(){
return (
            <div>
                <body>
                <center><h3>Create New User</h3></center>
                    <form onSubmit={this.handleSubmit}>
                    <center><label for="username">Enter User Name:</label><input name="username" type="text" value={this.state.username} onChange={this.handleChange}></input></center>
                    <center><label for="password">Create Password:</label><input name="password" type="password" value={this.state.password} onChange={this.handleChange}></input></center>
                    <center><label for="email">Enter Email Address:</label><input name="email" type="text" value={this.state.email} onChange={this.handleChange}></input></center>
                    <center><label for="first_name">Enter First Name:</label><input name="first_name" type="text" value={this.state.first_name} onChange={this.handleChange}></input></center>
                    <center><label for="last_name">Enter Last Name:</label><input name="last_name" type="text" value={this.state.last_name} onChange={this.handleChange}></input></center>
                    <center><label for="brewery_associated_with">Enter Brewery Associated With:</label><input name="brewery_associated_with" type="text" value={this.state.brewery_associated_with} onChange={this.handleChange}></input></center>
                    <center><button type="submit">Submit</button></center>
                    </form>
                    </body>
            </div>
        )
    }    
}

                   
                    
                    