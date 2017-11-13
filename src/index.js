import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App  cat={5} txt="This is the prop text" />, 
    document.getElementById('root')
);
registerServiceWorker();
