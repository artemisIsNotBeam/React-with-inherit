import './App.css';
import React from 'react';

class Buttan extends React.Component {
  
  constructor(props){
    super(props);
    this.upDate= this.upDate.bind(this);
  }
  //run  the props to keep <button> tags length down
  upDate(option){
    this.props.update(option);
  }
  
  render() {
    return (
      <div>
          {/* top two are username and password */}
          <p id="username">{this.props.userName}</p>
          <p id="password">{this.props.password}</p>
          {/* () => to make sure it only runs when clicked otherwise it runs when website */}
          <button id="button1" onClick={() =>{this.upDate(this.props.PasswordList.repl)} }> {this.props.option}</button>
          <button id="button2" onClick={() =>{this.upDate(this.props.PasswordList.github)} }> {this.props.option2}</button>
      </div>
    )
  }
}

export default Buttan;