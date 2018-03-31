import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import HomePage from "./mainPage/HomePage";
import reducer from './store/reducer/reducer';
import {createStore} from 'redux';


const store = createStore(reducer);


ReactDOM.render(<Provider store={store}><HomePage/></Provider>,
    document.getElementById('root'));
registerServiceWorker();
