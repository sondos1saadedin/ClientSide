import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import MnueItem from 'material-ui-icons/';
import Paper from 'material-ui/Paper';
const styles = {
    root: {
        flexGrow: 2,
    },
};

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classes: props,
            username: '',
            password: '',
            email: '',
            phone: '',
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

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });

        console.log(this.state.email);
    };

    handlePhoneChange = event => {
        this.setState({
            phone: event.target.value
        });

        console.log(this.state.phone);
    };


    loginMe = () => {
        fetch('http://localhost:8090/sign-up?email=' + this.state.email +
            '&password=' + this.state.password +
            '&username=' + this.state.username +
            '&phone=' + this.state.phone)
            .then(response => response.json())
            .then(data => this.setState({logged: data}));
    };


    render() {
        return (
            <div className={this.state.classes.root}>


                <Paper elevation={4} style={{padding: "32px"}}
                >

                    <Typography component="p">
                        <TextField
                            style={{marginBottom: "16px"}}
                            id="name"
                            label="Name"
                            className={this.state.classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </Typography>


                    <Typography component="p">
                        <TextField
                            style={{marginBottom: "16px"}}
                            id="password-input"
                            label="Password"
                            className={this.state.classes.textField}
                            type="password"
                            autoComplete="current-password"
                            onChange={this.handlePasswordChange}
                            margin="16px"
                        />
                    </Typography>


                    <Typography component="p">
                        <TextField
                            style={{marginBottom: "16px"}}
                            id="password-input"
                            label="Email"
                            className={this.state.classes.textField}
                            type="email"
                            autoComplete="current-password"
                            onChange={this.handleEmailChange}
                            margin="16px"
                        />
                    </Typography>


                    <Typography component="p">
                        <TextField
                            style={{marginBottom: "16px"}}
                            id="password-input"
                            label="phone number"
                            className={this.state.classes.textField}
                            type="text"
                            autoComplete="current-password"
                            onChange={this.handlePhoneChange}
                            margin="16px"
                        />
                    </Typography>


                    <Typography component="p" margin="16">
                        <Button style={{marginBottom: "16px"}}
                                variant="raised" color="primary" className={this.state.classes.button}
                                onClick={this.loginMe}>
                            SignUp
                        </Button>
                    </Typography>
                </Paper>


                {
                    this.state.logged.map(
                        v => {
                            return <div> {v} </div>;
                        }
                    )
                }
            </div>
        );
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);