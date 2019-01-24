import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Series from '../../containers/Series';
import SingleSeries from '../../containers/SingleSeries';


const Main = props => (
    <Switch>
        <Route exact path="/" component={Series}></Route>
        <Route path="/series/:id" component={SingleSeries}></Route>
        {// Access the Above Route by http://localhost:3002/series/123
        }
    </Switch>
)

export default Main;