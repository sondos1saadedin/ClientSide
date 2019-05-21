/**
 * Created by sondo on 07/05/2018.
 */
import React from 'react';
import {Button, Grid, Paper, Typography} from "material-ui";
import ItemGrid from "../Cards/components/Grid/ItemGrid";
import ProfileCard from "../Cards/components/Cards/ProfileCard";

import avatar  from './avatar.png'
import icon from './icon2.png'
import {connect} from "react-redux";

class WelcomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        console.log("Emaaaaaaaaaail" + this.props.email);
        fetch('http://localhost:8090/get-user?email=' + this.props.email)
            .then(response => response.json())
            .then(data => {
                this.setState({user: data[0]});
                console.log(this.state.user);

            });
    }

    render() {
        const {user} = this.state;
        return (
            <div style={{  display: "flex",
               justifyContent: "center",
               alignItems:"center",
            padding: 32}}>
                <Paper elevation={4} style={{padding: 16, textAlign: "center"}}>
                    <Typography variant={"title"} component={"h1"}>
                        Welcome To WAT
                    </Typography>

                    <Typography >
                    <div style={{maxWidth: 400, maxHeight: 400, marginTop: 50}}>
                        <ProfileCard

                            avatar={icon}
                            subtitle={user.firstName + "  " +  user.lastName}
                            title={user.email}
                            description="Be productive by writing test scenarios for your website and save them and then share them by your collaboratives"
                            footer={
                                <Button color="primary" round>
                                   Be Productive
                                </Button>
                            }

                        />
                    </div>
                    </Typography>
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.userEmail
    }
};



export default connect(mapStateToProps)((WelcomePage));