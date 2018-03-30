import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ScenarioList from "./DataComponents/Components/ScenarioList";
import Login from "./Pages/UserPages/Login";
import SCard from "./Aseel/SCard";
import ScenarioPageBar from "./WriteScenarioPage/ScenarioPageBar";
import DemoBase from "./WriteScenarioPage/ScenarioTable";
import ScenarioPage from "./WriteScenarioPage/ScenarioPage";
import MainPage from "./BasePages/MainPage"
import HomePageHeader from "./mainPage/HomePageHeader";
import HomePage from "./mainPage/HomePage";


ReactDOM.render(<HomePage/>, document.getElementById('root'));
registerServiceWorker();
