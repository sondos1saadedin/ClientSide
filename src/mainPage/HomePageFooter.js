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




class HomePageFooter extends React.Component {


    render() {
        return (



            <div className="globalContent">

                <main>
                    <footer>
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


export default HomePageFooter;