/**
 * Created by sondo on 30/03/2018.
 */
import React from 'react';
import HomePageNav from "./HomePageNav";
import HomePageHeader from "./HomePageHeader";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import SignIn from "../BasePages/SignIn";
import SignUp from "../BasePages/SignUp";
import {connect} from "react-redux";
import AboutCards from "./AboutCards";
import UserDrawer from "../UserPage/UserDrawer";
import AboutUs from "../aboutUs/AboutUs";


class HomePage extends React.Component {

    constructor(props) {
        super(props);
    }

    test = () => {

        this.setState({state: this.state});
    }

    render() {
        if (this.props.isLogin == true) {
            return <UserDrawer/>

        }
        return (
            <Router>
                <div>
                    <HomePageNav/>
                    <Switch>
                        <Route path="/aboutUs" component={AboutUs}/>
                        <Route exact path="/:path(\w*)" component={HomePageHeader}/>

                    </Switch>
                </div>
            </Router>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        isLogin: state.login,
    }
};


export default connect(mapStateToProps)(HomePage);