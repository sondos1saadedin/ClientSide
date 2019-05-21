/**
 * Created by sondo on 22/04/2018.
 */
import React from 'react';
import {connect} from "react-redux";
import {Button, Icon, Paper, TextField, Typography} from "material-ui";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Update from 'material-ui-icons/Update';
import classNames from 'classnames';





const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },

    iconSmall: {
        fontSize: 20,
    },

});


class UpdateUser extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

//this.props.email
    componentDidMount() {
        fetch('http://localhost:8090/get-user?email=' + this.props.email)
            .then(response => response.json())
            .then(data => {
                this.setState({user: data[0]});
                console.log(this.state.user);

            });
    }

    updatePersonUser = () => {
        console.log(this.state.user);
        fetch('http://localhost:8090/update-user?preEmail=' + this.props.email +
            '&email=' + this.state.user.email +
            '&password=' + this.state.user.password +
            '&username=' + this.state.user.username +
            '&phone=' + this.state.user.phoneNumber +
            '&firstName=' + this.state.user.firstName +
            '&lastName=' + this.state.user.lastName)
            .then(response => response.json())
            .then(data => {
                data.map(
                    v => {
                        console.log(v);
                        if (v == "true") {
                            console.log("login is done")
                            this.props.onLoginMe(this.state.user.email,this.state.user.email);
                        } else {
                            console.log("two");

                        }
                    }
                )
            })
    }

    handleChange = name => event => {
        console.log("namedd " +name );
        this.setState({
            user : {...this.state.user ,[name]: event.target.value}
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.root} elevation={4} style = {{padding: 16}}>
                    <Typography variant="headline" component="h3" style = {{marginBottom : 50}}>
                        Update User Information:
                    </Typography>


                    <TextField
                        required
                        id="username"
                        label="Username"
                        value={this.state.user.username}
                        className={classes.textField}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleChange("username")}
                        style = {{marginRight: 40 , marginBottom : 20}}

                    />

                    <br/>
                    <br/>

                    <TextField
                        required
                        id="firstName"
                        label="First Name"
                        value={this.state.user.firstName}
                        className={classes.textField}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleChange("firstName")}
                        style = {{marginRight: 80 , marginBottom : 20}}

                    />



                    <TextField
                        required
                        id="lastName"
                        label="Last Name"
                        value={this.state.user.lastName}
                        className={classes.textField}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleChange("lastName")}
                        style = {{marginRight: 20 , marginBottom : 20}}

                    />


                    <br/>
                    <br/>

                    <TextField
                        id="email"
                        label="User Email"
                        value={this.state.user.email}
                        className={classes.textField}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleChange("email")}
                        style = {{marginRight: 80 , marginBottom : 20}}

                    />

                    <TextField
                        id="phone"
                        label="Phone number"
                        value={this.state.user.phoneNumber}
                        className={classes.textField}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleChange("phoneNumber")}
                        style = {{marginRight: 20 , marginBottom : 20}}

                    />
                    <br/>
                    <br/>


                    <Button className={classes.button} variant="raised"
                            style = {{marginTop : 80 , backgroundColor : "#24b47e" , color: "#ffffff"}}
                    onClick = {this.updatePersonUser}>
                        Update
                        <Update className={classNames(classes.rightIcon, classes.iconSmall)}/>
                    </Button>



                </Paper>
            </div>

        )
    }
}


UpdateUser.propTypes = {
    classes: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => {
    return {
        email: state.userEmail
    }
};
const mapDispatchToProps = (dispatch) => {

    return {
        onLoginMe: (username, email) => {
            dispatch({type: 'LOGIN_ME', data: {userName: email, email: email}});
        }
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UpdateUser));