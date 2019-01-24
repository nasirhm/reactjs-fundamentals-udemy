import React from 'react';
import './index.css';

const SeriesList = (props) => {
    return(
        <div>
            <ul className="series-list">
            <li>
                {props.List.map(series => (
                    <li>{series.show.name}</li>
                ))}
                </li>
            </ul>
        </div>
    )
}

export default SeriesList;