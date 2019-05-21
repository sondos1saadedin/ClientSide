/**
 * Created by sondo on 19/03/2018.
 */
import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import ScenarioPage from '../WriteScenarioPage/ScenarioPage'
import {connect} from 'react-redux';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
};


class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navigate: false,
        }
    }


    changeNavigate(v){
        this.setState({
            navigate: v
        });

        console.log("inChangeNav");
    }
    render() {


        const {classes} = this.props;

        //TODO get the state of our store and then decide to go or not.
        if (this.state.navigate)
            return <ScenarioPage/>

        return (

            <div>

                <Router>
                    <div>
                        <Card className={classes.card} style={{display: 'inline-block', marginRight: "16px"}}>

                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    <Link to="/SignIn">Sign In</Link>
                                </Typography>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>

                        <Card className={classes.card} style={{display: 'inline-block'}}>

                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    <Link to="/SignUp">Sign Up</Link>
                                </Typography>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>


                        <hr />


                        <Route exact path="/" component={Home}  />
                        <Route path="/SignIn" component={()=><SignIn/>} />
                        <Route path="/SignUp" component={SignUp}/>
                    </div>
                </Router>
                }
            </div>
        );
    }
}
const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);





export default connect() (withStyles(styles)(MainPage));