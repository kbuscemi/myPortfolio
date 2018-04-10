import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { BrowserRouter as Router, Route  } from 'react-router-dom'; 
import { HashRouter as Router, Route  } from 'react-router-dom'; 
// import { HashRouter } from 'react-router-dom';

ReactDOM.render(<Router><Route component={App} /></Router>, document.getElementById('root'));
// ReactDOM.render(<HashRouter> <App /> </HashRouter>, document.getElementById('root'));


