/**
 * Created by sondo on 01/05/2018.
 */


import React from 'react';


import {Bar, Line} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';
import Check from 'material-ui-icons/Check';
import Error from 'material-ui-icons/Error';


import PropTypes from 'prop-types'
import {Grid, withStyles} from "material-ui";


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

class RightMessage extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {
        const {classes} = this.props;

        return (

            <ListItem button className={classes.nested}>
                <ListItemIcon>
                    <Check style={{
                        fontSize: '100px',
                        color: "#1BBC9B"
                    }}/>
                </ListItemIcon>
                <ListItemText inset primary={this.props.message}/>
            </ListItem>

        )
    }

}

RightMessage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RightMessage);