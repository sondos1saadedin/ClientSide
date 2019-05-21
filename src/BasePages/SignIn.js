import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import MnueItem from 'material-ui-icons/';
import {connect} from 'react-redux';
import {Paper} from "material-ui";
import pic from "./pic4.png"
import AlertDialogSlide from "../AlertDialog/AlertDialogSlide";
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
            password: '',
            logged: [],
            email: "",
            open: false,
            passwordValid:false,
            emailValid:false,
            formValid:false,
            formErrors: {},
            dMessage:""
        };

    }

    validEmail=(value) => {
        console.log("emaillll" + value);



        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;

        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'email is invalid';

        this.setState({formErrors : fieldValidationErrors})

        return emailValid;

    }

    validPassword = (value) =>{

        console.log("passwordddd" + value);

        let fieldValidationErrors = this.state.formErrors;
        let passwordValid = this.state.passwordValid;
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': 'password is too short';
        this.setState({formErrors : fieldValidationErrors})

        return passwordValid;

    }

    validateForm = () => {
        console.log("emaillll" + this.state.emailValid);
        console.log("passwordddd" + this.state.passwordValid);

        this.setState({...this.state,formValid: this.state.emailValid && this.state.passwordValid});
    }



    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleChange = event => {
        this.setState({
            email: event.target.value
        });
    };
    handlePasswordChange = event => {
        this.setState({


            password: event.target.value
        });

    };

    loginMe = () => {


        console.log("one1");
        if(   this.validEmail(this.state.email) &&  this.validPassword(this.state.password) ) {
            console.log("two2");

            fetch('http://localhost:8090/sign-in?email=' + this.state.email + '&password=' + this.state.password)
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
                                    this.props.onLoginMe(this.state.email, this.state.email);
                                } else {
                                    console.log("two");
                                    this.setState({
                                        open: true,
                                        dMessage: "Wrong email or password!!",
                                    })

                                }
                            }
                        )
                    }
                });
        }else {
            console.log("three3");

            this.setState({
                open: true,
                dMessage: this.state.formErrors.email + ",  " + this.state.formErrors.password,
            })
        }



    };

    render() {
        return (
            <div id="signIn" className={this.state.classes.root}>

                <form onSubmit={

                    (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    } }>
                    <Paper elevation={4} style={{
                        padding: "32px", backgroundImage: "url(" + pic + ")",
                        backgroundSize: "cover", backgroundPosition: "center", minHeight: 360
                    }}
                    >

                        <Typography component="p">
                            <TextField
                                required
                                id="name"
                                label="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                margin="normal"
                            />
                        </Typography>


                        <Typography component="p">
                            <TextField
                                required
                                id="password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={this.handlePasswordChange}
                                margin="normal"
                            />
                        </Typography>


                        <Typography component="p" margin="16">
                            <Button style={{marginTop: "40px", backgroundColor: "#24b47e"}}
                                    variant="raised" color="primary" className={this.state.classes.button}
                                    onClick={this.loginMe} type="submit">
                                Login
                            </Button>
                        </Typography>
                    </Paper>
                </form>

                <AlertDialogSlide open={this.state.open} handleClose = {this.handleClose}
                                  handleClickOpen ={this.handleClickOpen}
                message = {this.state.dMessage}/>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {

    return {
        onLoginMe: (username, email) => {
            dispatch({type: 'LOGIN_ME', data: {userName: email, email: email}});
        }
    }
};

export default connect(null, mapDispatchToProps)(SignIn);