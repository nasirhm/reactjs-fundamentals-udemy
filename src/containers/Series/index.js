import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';


class Series extends Component{
    state = {
        series : [],
        isFetching : false,
        seriesName : ''
      }
    //   componentDidMount(){
    //     // const series = ["Vikings", "Big Bang Theory", "Game of Thrones", "Narcos", "Friends"];
    //     // setTimeout(() => {
    //     //  // this.setState({series : series})
    //     //  //If the Name is same you can write one time and it would work as a charm =) 
    //     //  this.setState({series})
    //     // }, 2000
    //      }
      onSeriesInputChange = e =>{
    //       console.log(e);
    //       console.log(e.target.value);
//     fetch('http://api.tvmaze.com/search/shows?q=Vikings')
//     .then((response) => response.json())
//    // .then(json => console.log(json));
//   .then(json => this.setState({series:json}))

// Added ` `
this.setState({seriesName : e.target.value, isFetching: true});
  fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
  .then((response) => response.json())
 // .then(json => console.log(json));
.then(json => this.setState({series:json, isFetching:false}))

}

    render(){
        const {series, seriesName, isFetching} = this.state;
        return(
            //  <div>The Length of Series array is : {this.state.series.length}
            <div>
             <div>
                 <input value = {seriesName} type="text" onChange={this.onSeriesInputChange} />
             </div>
            
            {
            !isFetching && series.length === 0 && seriesName === '' 
            &&
            <p>Please enter Series name into Input</p>
            }
            
            {
                !isFetching && series.length === 0 && seriesName.trim !== '' 
                &&
                <p>No TV result found</p> 
            }

            {
                isFetching && <Loader />
            }
            {
                !isFetching && <SeriesList List={this.state.series} />
            }
            
            </div>
        )
    }
}

export default Series;