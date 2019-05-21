import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import HomePage from "./mainPage/HomePage";
import reducer from './store/reducer/reducer';
import {createStore} from 'redux';
import ProfileCard from "./Cards/components/Cards/ProfileCard";
import avatar from "./Cards/assets/img/faces/marc.jpg";
import {Button, Grid} from "material-ui";
import ItemGrid from "./Cards/components/Grid/ItemGrid";
import WelcomePage from "./mainPage/WelcomPage";

const store = createStore(reducer);


ReactDOM.render(<Provider store={store}>
   <HomePage/></Provider>,
    document.getElementById('root'));
registerServiceWorker();
