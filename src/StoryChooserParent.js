import './App.css';
import React from 'react';
import Buttan from './storychooser';

const example = {
    repl:["replt","repltUserName","repltpassword"],
    github:["github","githubPassword","githubPossword"]
  }

class ParentStory extends React.Component {
    constructor(props){
      super(props);
      this.state = { 
        Index:1, 
        story:example, 
        message:"this run first",
        prompt:"passwowadsar",
        userName:"username",
        option:example.repl[0],
        option2:example.github[0]
      }

      this.IncrementIndex = this.IncrementIndex.bind(this);
    }

    IncrementIndex(option){
      this.setState({
        prompt:option[2],
        userName:option[1]
      })
    }
    render(){
        return (
        <div>
            <h1>Password</h1>
            <Buttan update={this.IncrementIndex} daStory={this.state.story} Index={this.state.Index} 
            prompt={this.state.userName} password={this.state.prompt}option={this.state.option} option2={this.state.option2}/>
        </div>
        )
    }
}

export default ParentStory;