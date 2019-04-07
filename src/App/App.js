import React, { Component } from 'react';
import './App.css';
import Intro from '../components/Intro';
import 'fetch'

class App extends Component {
  state = 
  {
    series : [] 
  }
  componentDidMount()
  {
    fetch("http://api.tvmaze.com/search/shows?q=thrones").then(res => res.json())
    .then(json => this.setState({series: json}));
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
