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
import {connect} from "react-redux";
import pic from "./pic4.png"
import AlertDialogSlide from "../AlertDialog/AlertDialogSlide";
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
            logged: [],
            firstName: '',
            lastName: '',
            open: false,
            passwordValid: false,
            emailValid: false,
            formValid: false,
            formErrors: {},
            dMessage: ""
        };

    }

    validEmail = (value) => {
        console.log("emaillll" + value);


        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;

        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'email is invalid';

        this.setState({formErrors: fieldValidationErrors})

        return emailValid;

    }

    validPassword = (value) => {

        console.log("passwordddd" + value);

        let fieldValidationErrors = this.state.formErrors;
        let passwordValid = this.state.passwordValid;
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : 'password is too short';
        this.setState({formErrors: fieldValidationErrors});

        return passwordValid;

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
    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        });
    }

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        });
    }
    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };


    loginMe = () => {

        if (this.validEmail(this.state.email) && this.validPassword(this.state.password)) {
            fetch('http://localhost:8090/sign-up?email=' + this.state.email +
                '&password=' + this.state.password +
                '&username=' + this.state.username +
                '&phone=' + this.state.phone +
                '&firstName=' + this.state.firstName +
                '&lastName=' + this.state.lastName)
                .then(response => response.json())
                .then(data => {
                    this.setState({logged: data});
                    console.log("three");
                    {
                        this.state.logged.map(
                            v => {
                                console.log(v);
                                if (v == "true") {

                                    console.log("login is done")
                                    this.setState({
                                        emali: this.state.username,

                                    });
                                    this.props.onLoginMe(this.state.username, this.state.email);
                                } else {
                                    console.log("two");
                                    this.setState({
                                        open: true,
                                        dMessage: "Wrong email or password!!",
                                    })
                                }

                                console.log("nothing");

                            }
                        )
                    }
                });
        } else {
            console.log("three3");

            this.setState({
                open: true,
                dMessage: this.state.formErrors.email + ",  " + this.state.formErrors.password,
            })
        }
    };


    render() {
        return (
            <div className={this.state.classes.root}>

                <form onSubmit={

                    (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    } }>
                    <Paper elevation={4} style={{
                        padding: "32px", backgroundImage: "url(" + pic + ")",
                        backgroundSize: "cover", backgroundPosition: "center"
                    }}
                    >

                        <Typography component="p">
                            <TextField
                                required
                                style={{marginBottom: "32px"}}
                                id="name"
                                label="Username"
                                className={this.state.classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange}
                            />

                            <TextField
                                required
                                style={{marginBottom: "32px", marginLeft: 80}}
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
                                required
                                style={{marginBottom: "32px"}}
                                id="password-input"
                                label="First Name"
                                className={this.state.classes.textField}
                                type="text"
                                autoComplete="current-password"
                                onChange={this.handleFirstNameChange}
                                margin="16px"
                            />
                            <TextField
                                required
                                style={{marginBottom: "32px", marginLeft: 80}}
                                id="password-input"
                                label="LastName"
                                className={this.state.classes.textField}
                                type="text"
                                autoComplete="current-password"
                                onChange={this.handleLastNameChange}
                                margin="16px"
                            />
                        </Typography>

                        <Typography component="p">

                            <TextField
                                required
                                style={{marginBottom: "32px"}}
                                id="password-input"
                                label="Email"
                                className={this.state.classes.textField}
                                type="email"
                                autoComplete="current-password"
                                onChange={this.handleEmailChange}
                                margin="16px"
                            />

                            <TextField
                                style={{marginBottom: "32px", marginLeft: 80}}
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
                            <Button style={{marginTop: "25px", backgroundColor: "#24b47e"}}
                                    variant="raised" color="primary" className={this.state.classes.button}
                                    onClick={this.loginMe} type="submit">
                                SignUp
                            </Button>
                        </Typography>
                    </Paper>
                </form>

                <AlertDialogSlide open={this.state.open} handleClose={this.handleClose}
                                  handleClickOpen={this.handleClickOpen}
                                  message={this.state.dMessage}/>
            </div>
        );
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
};


const mapDispatchToProps = (dispatch) => {

    return {
        onLoginMe: (username, email) => {
            dispatch({type: 'LOGIN_ME', data: {userName: username, email: email}});
        }
    }
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(SignUp));