import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
    console.log("[index.js][request]=>");
    console.log(request);
    console.log("<=[index.js][request]");
    return request;
}, error => {
    console.log("[index.js][request][error]=>");
    console.log(error);
    console.log("<=[index.js][request][error]");  
    return Promise.reject(error);  
});

axios.interceptors.response.use(response => {
    console.log("[index.js][response]=>");
    console.log(response);
    console.log("<=[index.js][response]");
    return response;
}, error => {
    console.log("[index.js][response][error]=>");
    console.log(error);
    console.log("<=[index.js][response][error]");  
    return Promise.reject(error);  
});



ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();