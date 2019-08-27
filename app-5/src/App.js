import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image myImage url={'https://vignette.wikia.nocookie.net/disney/images/9/90/Haku.png/revision/latest?cb=20131201071214'}/>
       </div>
    );
  }
}

export default App;
