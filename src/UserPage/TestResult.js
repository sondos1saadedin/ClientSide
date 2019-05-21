/**
 * Created by sondo on 01/05/2018.
 */


import React from 'react';


import {Bar, Line} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';
import Check from 'material-ui-icons/Check';
import Error from 'material-ui-icons/Error';
import pic from "../BasePages/pic4.png"



import PropTypes from 'prop-types'
import {Grid, Paper, withStyles} from "material-ui";
import ErrorMessage from "./ErrorMessage";
import RightMessage from "./RightMessage";


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class TestResult extends React.Component {

    constructor(props) {
        super(props);

        this. state = { open: true , messages:[]};
    }

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    componentDidMount() {
        console.log(this.props.scenario);
    }

    render() {
        const { classes } = this.props;
        let data = {
            labels: ["Passes", "Fails"],
            datasets: [{
                label: "Test Result",
                backgroundColor: ["#1BBC9B", "#E64C66"],
                data: [this.props.scenario.testResult.passes, this.props.scenario.testResult.fails],
            }]
        };


        return (
            <Paper elevation={4} style={{
                padding: "32px", backgroundImage: "url(" + pic + ")",
                backgroundSize: "cover", backgroundPosition: "center", minHeight: 360
            }}
            >
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                <div style={{maxWidth: 400, maxHeight: 400}}>
                    <Doughnut
                        data={data}
                        height={200}
                        width={200}
                    />
                </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <div className={classes.root}>
                        <List
                            component="nav"
                            subheader={<ListSubheader component="h1">Test Result</ListSubheader>}
                        >
                            <ListItem button onClick={this.handleClick}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Test Messages" />
                                {this.state.open ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {this.props.scenario.testResult.testMessages.map(m =>  {
                                       return ((m.status === "Pass") ?
                                           <RightMessage message={m.message}/>
                                           : <ErrorMessage message={m.message}/>
                                        )
                                    })}
                                </List>
                            </Collapse>
                        </List>
                    </div>
                </Grid>
            </Grid>
            </Paper>

        )
    }

}

TestResult.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TestResult);