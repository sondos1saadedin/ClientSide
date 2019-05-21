import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import {FormLabel, FormControlLabel} from 'material-ui/Form';
import Radio, {RadioGroup} from 'material-ui/Radio';
import Paper from 'material-ui/Paper';
import AboutCard from "./AboutCard";
import './HomePage.css';
import AddIcon from 'material-ui-icons/Add';



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },

    above:{

        position: "relative",
        display: "flex"
    }


});
const cardsContent = [
    {icon : "AddIcon", title : "Create", desc: "Add your own test scenarios"},
    {icon : "SaveIcon", title : "Save", desc: "Save and share them"},
    {icon :"ShowChart", title : "Result", desc: "See the results!"}

]

class AboutCards extends React.Component {
    state = {
        spacing: '24',
    };

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    render() {
        const {classes} = this.props;
        const {spacing} = this.state;

        return (

            <section className={classes.above} >
                <div className="container-lg">
                <Grid container className={classes.root} spacing={16}>
                    <Grid item xs={24}>
                        <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>

                            {cardsContent.map(p => {
                                return(
                                    <Grid item>
                                        <AboutCard title = {p.title} icon = {p.icon} desc = {p.desc}/>
                                    </Grid>

                                )
                            })}

                        </Grid>
                    </Grid>
                </Grid>
                </div>
            </section>

        );
    }
}

AboutCards.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutCards);