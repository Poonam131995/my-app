import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routelist from './Routing.js';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderElement from './Header.js';
import './style.css';
class MainApp extends React.Component{
    render=()=>{
        return(
            <>
            <HeaderElement></HeaderElement>
            </>
        );
    }
}
ReactDOM.render(<BrowserRouter><Routelist></Routelist></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
