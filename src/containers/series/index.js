import React, { Component } from "react";
import SeriesList from "../../components/seriesList/index";
import "../series/styles.css";
class Series extends Component {
  state = {
    series: [],
    seriesName : '',
    isFetching  : false
  };
  triggerMovieSearch = (event)=>{
      console.log(event);
      if(event.target.value)
      {
        this.setState({seriesName:event.target.value,isFetching: true});
        fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
        .then(res => res.json())
        .then(json => {
          this.setState({ series: json ,isFetching:false})
        });
      }
  };

  componentDidMount() {

  }
  render() {
    const {series,seriesName,isFetching} = this.state;
    return (
      
      <div className="container">
        <div className="row">
          <input type="text" value={seriesName} placeholder="Search.."  onChange={this.triggerMovieSearch}/>
        </div>
        {
          isFetching &&
          <div>
            <h3>Loading</h3>
          </div>
        }
        {
          !isFetching && seriesName.trim().length == 0 &&
          <div>
            <h3>Please enter a value</h3>
          </div>
        }
        {
          !isFetching && seriesName.trim().length > 0 &&
          <SeriesList className="row" seriesList={this.state.series} />
        }
      </div>
    )
  }
}

export default Series;
