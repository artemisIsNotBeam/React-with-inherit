import './App.css';
import React from 'react';

class Buttan extends React.Component {
  
  constructor(props){
    super(props);
    this.upDate= this.upDate.bind(this);
  }

  upDate(option){
    this.props.update(option);
  }
  
  render() {
    return (
      <div>
          <p id="username">{this.props.prompt}</p>
          <p id="password">{this.props.password}</p>
          <button id="button1" onClick={() =>{this.upDate(this.props.daStory.repl)} }> {this.props.option}</button>
          <button id="button2" onClick={() =>{this.upDate(this.props.daStory.github)} }> {this.props.option2}</button>
      </div>
    )
  }
}

export default Buttan;