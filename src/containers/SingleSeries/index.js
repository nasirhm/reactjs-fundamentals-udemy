import React,{Component} from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component{
    state = { 
        show: null
    }
    componentDidMount(){
        const { id } = this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then((response) => response.json())
        .then(json => this.setState({show: json}))
      
    }
    render(){
        // console.log(this.props);
        const {show} = this.state;
        console.log(show);
        return(
            <div>
                {/* <p>Single Series - The Show's Id is {this.props.match.params.id}</p> */}
               
               {show === null && <Loader />}
               {
                show !== null 
                    &&
                // <p>Show has been Loaded</p>
                <div>
                <p><h1>{show.name}</h1></p>
                <p>Premiered - {show.premiered}</p>
                <p>Rating - {show.rating.average}</p>
                <p>Episode - {show._embedded.episodes.length}</p>
                <p><img alt="Show X" src={show.image.medium} /></p>
                </div>
               }
            </div>
        )
    }
}


export default SingleSeries;