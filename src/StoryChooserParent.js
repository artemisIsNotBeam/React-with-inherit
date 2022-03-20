import './App.css';
import React from 'react';
import Buttan from './storychooser';

const Passwords = {
    repl:["repltUserName","repltpassword"],
    github:["githubPassword","githubPossword"]
  }

class ParentStory extends React.Component {
    constructor(props){
      super(props);
      this.state = { 
        pwdList:Passwords, 
        password:"password",
        userName:"username",
        option:Passwords.repl[0],
        option2:Passwords.github[0]
      }
      // let Increment Index change state
      this.IncrementIndex = this.IncrementIndex.bind(this);
    }
    // find new state
    IncrementIndex(option){
      //option returns a list
      this.setState({
        password:option[1],
        userName:option[0]
      })
    }

    render(){
        return (
        <div>
            <h1>Password</h1>
            {/* both options are what to render in child */}
            <Buttan update={this.IncrementIndex} PasswordList={this.state.pwdList}
            userName={this.state.userName} password={this.state.password} 
            option={this.state.option} option2={this.state.option2}/>
        </div>
        )
    }
}

export default ParentStory;