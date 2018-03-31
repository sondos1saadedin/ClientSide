/**
 * Created by sondo on 29/03/2018.
 */
import React from 'react';
import './HomePage.css';
import HomePageIntro from "./HomePageIntro";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import SignIn from "../BasePages/SignIn";


class HomePageHeader extends React.Component {


    render() {
        return (



            <div className="globalContent">

                <main>
                    <header>
                        <div id="stripes" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </header>


                    <Switch>
                        <Route exact path="/" component={HomePageIntro}/>
                        <Route path="/SignIn" component={SignIn}/>
                    </Switch>
                </main>

            </div>

        )
    }

}


export default HomePageHeader;