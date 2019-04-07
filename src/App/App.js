import React, { Component } from 'react';
import './App.css';
import Intro from '../components/Intro';
import ''

class App extends Component {
  state = 
  {
    series : []
  }
  componentDidMount()
  {
    const series = ["Big Bang Theory","Game of Thrones"];
    setTimeout(()=>{this.setState({series:series})},2000)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here is where you can find all your beloved series"/>
        The length of the series array = {this.state.series.length}
      </div>
    );
  }
}

export default App;
