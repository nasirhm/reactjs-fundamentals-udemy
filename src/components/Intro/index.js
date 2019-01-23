import React from 'react';

const Intro = props =>(
    //It you have only one larameter to take we dont need to use parnethesis ()
    <p className = "App-intro">
      {props.message}
    </p>
);

  export default Intro;