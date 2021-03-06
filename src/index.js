import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
 
//Creation of an Element
//const greeting = React.createElement('h1', {}, 'Hello World!')

//Using JSX

// const getCurrentDate = () => {
//         const date = new Date();
//         return date.toDateString();
// }

// const greeting = <h1>Hello World! | Current Date {getCurrentDate()}</h1>;

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
