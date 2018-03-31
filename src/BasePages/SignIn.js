import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import MnueItem from 'material-ui-icons/'
const styles = {
    root: {
        flexGrow: 1,
    },
};

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classes: props,
            username: '',
            password: '',
            logged: []
        };

    }


    handleChange = event => {
        this.setState({
            username: event.target.value
        });
        console.log(this.state.username);
    };
    handlePasswordChange = event => {
        this.setState({


            password: event.target.value
        });

        console.log(this.state.password);
    };


    loginMe = () => {
        fetch('http://localhost:8090/sign-in?email=' + this.state.username + '&password=123456')
            .then(response => response.json())
            .then(data => this.setState({logged: data}));
    };


    render() {
        return (
            <section id="intro">
                <div className="container-lg">
                <div className={this.state.classes.root}>


                    <form>

                        <TextField
                            id="name"
                            label="Name"
                            className={this.state.classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange}
                            margin="normal"
                        />

                        <TextField
                            id="password-input"
                            label="Password"
                            className={this.state.classes.textField}
                            type="password"
                            autoComplete="current-password"
                            onChange={this.handlePasswordChange}
                            margin="normal"
                        />


                        <Button variant="raised" color="primary" className={this.state.classes.button}
                                onClick={this.loginMe}>
                            Login
                        </Button>
                    </form>


                    {
                        this.state.logged.map(
                            v => {
                                console.log(v);
                                if (v == "true") {
                                    console.log("heeey");
                                    this.props.changeNav(true);
                                } else {
                                    console.log("nnnnnn");

                                    this.props.changeddNav;
                                }
                            }
                        )
                    }
                </div>
            </div>
            </section>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);