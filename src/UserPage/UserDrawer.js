import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import { UserPageStyles } from '../store/reducer/PresistentData';
import UserPageNav from "./UserPageNav";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import ScenarioTable from "../WriteScenarioPage/ScenarioTable";
import ScenarioCards from "../scenarioCards/ScenarioCards";
import UpdateUser from "./UpdateUser";
import TestResult from "./TestResult";
import SharedScenarioCards from "../scenarioCards/SharedScenarioCards";
import WelcomePage from "../mainPage/WelcomPage";


const drawerWidth = 240;


const styles = UserPageStyles;


const inbox = () => (
    <div>
        <h2>Inbox</h2>
    </div>
);


const mainTypo = () => (
    <WelcomePage/>
)



class UserDrawer extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <Router>
            <div className={classes.root}>
                <AppBar
                    style={{ backgroundColor: '#24b47e' }}
                    position="absolute"
                    className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                >
                    <Toolbar disableGutters={!this.state.open} color="#a6ffcb">
                        <IconButton
                            color="#a6ffcb"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, this.state.open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap>
                         User Pages
                        </Typography>
                    </Toolbar>
                </AppBar>
                <UserPageNav open = {this.state.open} handleDrawerClose ={this.handleDrawerClose}/>

                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Switch>
                        <Route exact path="/" component={mainTypo}/>
                        <Route path="/account" component={UpdateUser}/>
                        <Route path="/inbox" component={ScenarioCards}/>
                        <Route path="/addScenario" component={ScenarioTable}/>
                        <Route path="/testResult" component={ScenarioCards}/>
                        <Route path="/sharedScenarios" component={SharedScenarioCards}/>


                    </Switch>
                </main>
            </div>
            </Router>
        );
    }
}

UserDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(UserDrawer);