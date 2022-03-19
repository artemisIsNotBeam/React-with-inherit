import './App.css';
import React from 'react';

class Buttan extends React.Component {
  
  constructor(props){
    super(props);
    this.upDate= this.upDate.bind(this);
  }

  upDate(option,Index){
    this.props.update(option, Index);
  }

  restart(){
    this.props.restart();
  }

  render() {
    return (
      <div>
          <p id="prompt">{this.props.daStory[this.props.Index]["prompt"]}</p>
          <button id="button1" onClick={() =>{this.upDate(1,this.props.Index)} }> {this.props.daStory[this.props.Index]["option1"]}</button>
          <button id="button2" onClick={() =>{this.upDate(2,this.props.Index)} }> {this.props.daStory[this.props.Index]["option2"]}</button>
          <button id="third" onClick={()=>{this.restart()}}>Restart</button>
          <p>{this.props.message}</p>
      </div>
    )
  }
}

export default Buttan;