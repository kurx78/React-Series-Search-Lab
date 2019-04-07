import React, { Component } from "react";
import "./App.css";
import Intro from "../components/Intro";
import "fetch";
import Table from "react-bootstrap/Table";



class App extends Component {
  state = {
    series: []
  };
  componentDidMount() {
    fetch("http://api.tvmaze.com/search/shows?q=thrones")
      .then(res => res.json())
      .then(json => this.setState({ series: json }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here is where you can find all your beloved series" />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Premiered</th>
              <th>Language</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
          {this.state.series.map((element, ElementIndex) => {
            return(
            <tr key={ElementIndex}>
              <td>{element.show.name}</td>
              <td>{element.show.status}</td>
              <td>{element.show.premiered}</td>
              <td>{element.show.language}</td>
              <td dangerouslySetInnerHTML={{__html: element.show.summary}}></td>
              
            </tr>);
          })}
          </tbody>
        </Table>
        ; The length of the series array = {this.state.series.length}
      </div>
    );
  }
}

export default App;
