import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Provider>
            <App store={store}/>
        </Provider>
    </BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();

