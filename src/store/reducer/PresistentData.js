/**
 * Created by sondo on 03/04/2018.
 */
import React from 'react';

import {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';

import InboxIcon from 'material-ui-icons/MoveToInbox';

import AddCircle from 'material-ui-icons/AddCircle';

import DraftsIcon from 'material-ui-icons/Drafts';

import TrendingUp from 'material-ui-icons/TrendingUp';

import SendIcon from 'material-ui-icons/Send';

import MailIcon from 'material-ui-icons/Mail';

import DeleteIcon from 'material-ui-icons/Delete';

import Share from 'material-ui-icons/Share';

import Exit from 'material-ui-icons/ExitToApp';


import AccountCircle from 'material-ui-icons/AccountCircle';


import ReportIcon from 'material-ui-icons/Report';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export const mailFolderListItems = (

    <div>
        <Link to="/addScenario">
            <ListItem button>

                <ListItemIcon>


                    <AddCircle />

                </ListItemIcon>

                <ListItemText primary="Add Scenario"/>

            </ListItem>
        </Link>

        <Link to="/account">
            <ListItem button>

                <ListItemIcon>


                    <AccountCircle />

                </ListItemIcon>

                <ListItemText primary="My Account"/>

            </ListItem>
        </Link>

        <Link to="/inbox">
            <ListItem button>

                <ListItemIcon>


                    <InboxIcon />

                </ListItemIcon>

                <ListItemText primary="My Scenarios"/>

            </ListItem>
        </Link>


        <Link to="/testResult">
            <ListItem button>

                <ListItemIcon>

                    <TrendingUp />

                </ListItemIcon>

                <ListItemText primary="Test Result"/>

            </ListItem>
        </Link>


        <Link to="/sharedScenarios">
            <ListItem button>

                <ListItemIcon>

                    <Share />

                </ListItemIcon>

                <ListItemText primary="Shared With me"/>

            </ListItem>
        </Link>


    </div>

);


export const otherMailFolderListItems = (

    <div>

        <Link to="/">
            <ListItem button>

                <ListItemIcon>

                    <Exit />

                </ListItemIcon>

                <ListItemText primary="Exit"/>

            </ListItem>
        </Link>


        <ListItem button>

            <ListItemIcon>

                <DeleteIcon />

            </ListItemIcon>

            <ListItemText primary="Trash"/>

        </ListItem>


    </div>

);
const drawerWidth = 240;

export const UserPageStyles = theme => ({
    root: {
        flexGrow: 1,
        height: "100%",
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});



