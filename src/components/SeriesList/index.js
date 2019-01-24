import React from 'react';

const SeriesList = (props) => {
    return(
        <div>
            <ul>
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