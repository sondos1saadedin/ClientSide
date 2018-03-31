/**
 * Created by sondo on 30/03/2018.
 */
import React from 'react';
import './HomePage.css';
import img from './logoGT.png';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import SignIn from "../BasePages/SignIn";
import SignUp from "../BasePages/SignUp";


class HomePageNav extends React.Component {


    render() {
        return (
                <header className="globalNav">
                    <div className="container-lg">
                        <nav>
                            <ul className="navRoot">


                                <li className="navSection logo">
                                    <a className="rootLink item-pricing colorize" href="/us/pricing"
                                       data-analytics-source="global_nav" data-analytics-action="pricing">
                                        <img className="mlogo" src={img} alt=""/>
                                    </a>
                                </li>

                                <li className="navSection primary">
                                    <button className="rootLink item-products hasDropdown colorize"
                                            aria-expanded="false"
                                            aria-haspopup="true" data-dropdown="products">
                                        <span>Products</span>
                                    </button>
                                    <button className="rootLink item-developers hasDropdown colorize"
                                            aria-expanded="true"
                                            aria-haspopup="true" data-dropdown="developers">
                                        <span>Developers</span>
                                    </button>
                                    <button className="rootLink item-company hasDropdown colorize" aria-expanded="false"
                                            aria-haspopup="true" data-dropdown="company">
                                        <span>Company</span>
                                    </button>
                                    <a className="rootLink item-pricing colorize" href="/us/pricing"
                                       data-analytics-source="global_nav" data-analytics-action="pricing">
                                        <span>Pricing</span>
                                    </a>
                                </li>

                                <li className="navSection secondary">
                                    <a className="rootLink item-support colorize">
                                        <span>Support</span>
                                    </a>

                                       <Link  to="/SignIn" className="rootLink item-support colorize">Sign In</Link>

                                </li>


                            </ul>
                        </nav>
                    </div>


                </header>


        )
    }

}


export  default HomePageNav;