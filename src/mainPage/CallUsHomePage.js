import React from 'react';
import {Card, Paper, withStyles} from "material-ui";
import * as PropTypes from "proptypes";
import './HomePage.css';
import * as classnames from "classnames";
import pic from "../BasePages/pic4.png"


const styles = {
    paper: {
        padding: 20,
        width: "100%",

    },

    card: {
        minWidth: 1000,

    },


    header: {
        marginTop: 16,
        marginBottom: 16,
        padding: 8,
    },

    main: {
        marginBottom: 16,
        padding: 8,

    },

    footer: {
        marginBottom: 16,
        padding: 8,
    },

    themeColor: {
        fontSize: 30,
        color: "#24b47e"
    },

    mainColor: {
        fontSize: 16,
        color: "#000000"
    },

    secondaryColor: {
        color: "#6b7c93"

    },
    absolute: {
        position: "absolute",
        bottom: "10px",
    },
    above: {

        position: "absolute",
        display: "flex",
        marginTop: 70,
        bottom: 0
    }

}


class CallUsHomePage extends React.Component {


    render() {
        const {classes} = this.props;

        return (
            <div id="test">
                <div className="container-lg">
                    <Paper elevation={4} style={{
                        padding: "32px", backgroundImage: "url(" + pic + ")",
                        backgroundSize: "cover", backgroundPosition: "center", minHeight: 200
                    }}
                    >

                        <section>
                            <header className={classes.header}>
                                <p className={classes.themeColor}>Thank you for using our website!!!</p>
                            </header>

                        </section>
                    </Paper>
                </div>
            </div>
        )
    }
}

CallUsHomePage.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(CallUsHomePage);