/**
 * Created by sondo on 30/03/2018.
 */
import React from 'react';
import HomePageNav from "./HomePageNav";
import HomePageHeader from "./HomePageHeader";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import SignIn from "../BasePages/SignIn";
import SignUp from "../BasePages/SignUp";



class HomePage extends React.Component{

    render() {
        return (
            <Router>
            <div>
                <HomePageNav/>
                <HomePageHeader/>

            </div>

            </Router>
        )
    }

}


export default HomePage;