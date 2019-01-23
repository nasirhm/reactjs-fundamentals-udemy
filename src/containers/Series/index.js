import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component{
    state = {
        series : []
      }
      componentDidMount(){
        // const series = ["Vikings", "Big Bang Theory", "Game of Thrones", "Narcos", "Friends"];
        // setTimeout(() => {
        //  // this.setState({series : series})
        //  //If the Name is same you can write one time and it would work as a charm =) 
        //  this.setState({series})
        // }, 2000
        fetch('http://api.tvmaze.com/search/shows?q=Vikings')
          .then((response) => response.json())
         // .then(json => console.log(json));
        .then(json => this.setState({series:json}))
      }
    render(){
        return(
            <div>The Length of Series array is : {this.state.series.length}
            <SeriesList List={this.state.series} />
            </div>
        )
    }
}

export default Series;