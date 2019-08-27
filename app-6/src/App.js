import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDo from './Todo'; 

class App extends Component {
  constructor(){
    super()

    this.state ={
      list: [],
      input: ""
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }
  
  handleInputChange(value){
    this.setState({input: value});
  }
  handleAddTask(){
    this.setState({
      list: [...this.state.list, this.setState.input],
      input: ""
    });
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <ToDo key={index} task={element} />;
    });

    return (
      <div className="App">
        <h1>my to-do list that i literally never use</h1>
      <div>
      <input value={this.state.input}
      placeholder="Enter new Task"
      onChange={e => this.handleInputChange(e.target.value)}
      />

      <button onClick={this.handleAddTask}>Add Stuff</button>
      </div> 
      <br />
      
      {list}
      </div>
      );
  }
}

export default App;
