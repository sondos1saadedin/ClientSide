/**
 * Created by sondo on 31/03/2018.
 */
import React from 'react';
import './HomePage.css';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
const styles = theme => ({
    biggerText: {
        fontSize: 30,
    },
});

class HomePageIntro extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <section id="intro">
                <div className="container-lg">
                    <h1>
                        WAT is here to help you test your web application
                    </h1>
                    <p class="common-BodyText">
                        WAT is the best software platform for testing your web app. We handle all ui testing
                        methods.
                    </p>
                </div>
            </section>
        )
    }
}

HomePageIntro.propTypes = {
    classes: PropTypes.object,
};


export default withStyles(styles)(HomePageIntro);

