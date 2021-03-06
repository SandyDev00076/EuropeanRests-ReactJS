import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListPageComponent from './components/ListPage/ListPage';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(<ListPageComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
