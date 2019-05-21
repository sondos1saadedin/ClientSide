/**
 * Created by sondo on 29/03/2018.
 */
import React from 'react';
import './HomePage.css';
import HomePageIntro from "./HomePageIntro";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import SignIn from "../BasePages/SignIn";
import AboutCards from "./AboutCards";
import HomePageContent from "./HomePageContent";
import DeveloperFirst from "./DeveloperFirst";
import CallUsHomePage from "./CallUsHomePage";




class HomePageHeader extends React.Component {


    render() {
        return (



            <div className="globalContent">

                <main >
                    <header>
                        <div id="stripes" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </header>

                    <HomePageIntro/>


                    <AboutCards/>
                    <HomePageContent/>

                    <DeveloperFirst/>


                    <footer >
                        <CallUsHomePage />

                        <div id="stripes2" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>

                        </div>

                    </footer>

                </main>

            </div>

        )
    }

}


export default HomePageHeader;