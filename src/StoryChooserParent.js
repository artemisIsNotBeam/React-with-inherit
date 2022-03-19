import './App.css';
import React from 'react';
import Buttan from './storychooser';

const example = {
    1:{
      "prompt":"do u buy azuki",
      "option1": "yes",
      "option2": "no",
      // option 1 will lead to 3
      1:3,
      // option 2 will lead to 2
      2:2
    },
    2:{
      "prompt":"u cry cause floor rises",
      "option1":"option1 (2)",
      "option2":"option2 (2)",
      1:"done",
      2:"done"
    },
    3:{
      "prompt":"nice u bought azuki u made big money",
      "option1": "option 1 nice",
      "option2": "option 2 nice",
      1:"done",
      2:"done"
  
    }
  }

class ParentStory extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
          Index:1, 
          story:example, 
          message:"this run first",
          
        }

        this.IncrementIndex = this.IncrementIndex.bind(this);
        this.restart = this.restart.bind(this);
    }

    IncrementIndex(option, List){
      /*
      const newPlace = List[this.state.Index][option];
      if (newPlace === "done"){
        alert("we're done!!")
      } else {
        this.setState({ Index: newPlace});
      }
      */
      this.setState({ message: option }, () => {
        console.log(this.state.message);
      }); 

      //reference this thing to fix printing weird thing fist before message
    }

    restart(){
      //this.setState( {Index:1} );
      this.setState({message:"restart"})
      console.log(this.state.message);
    }

    render(){
        return (
        <div>
            <h1>Welcome to my choose your own adventure using react</h1>
            <Buttan update={this.IncrementIndex} restart={this.restart} daStory={this.state.story} Index={this.state.Index} 
            message={this.state.message} prompt={} option={} option2={}/>
        </div>
        )
    }
}

export default ParentStory;