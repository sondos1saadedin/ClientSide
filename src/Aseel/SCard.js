import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardHeader, CardMedia, CardContent, CardActions} from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Menu, {MenuItem} from 'material-ui/Menu';


// import './SCard.css';


class SCard extends Component {

    state = ({
        jaa: [{name: "ABC", date: "12 sep 2018", desc: "aksldkfhkksd"},
            {name: "ABC", date: "12 sep 2018", desc: "aksldkfhkksd"},
            {name: "ABC", date: "12 sep 2018", desc: "aksldkfhkksd"},
            {name: "ABC", date: "12 sep 2018", desc: "aksldkfhkksd"}],

        boolVar: false,
        auth: true,
        anchorEl: null,
    });

    handleChange = (event, checked) => {
        this.setState({auth: checked});
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className="myDiv">

                {this.state.jaa.map(p => {
                    return (
                        <Card className="card">
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="Recipe" className="ava">
                                        {p.name}
                                    </Avatar>
                                }
                                action={

                                    <div>
                                        <IconButton
                                            aria-owns={open ? 'menu-appbar' : null}
                                            aria-haspopup="true"
                                            onClick={this.handleMenu}
                                            color="inherit"
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={open}
                                            onClose={this.handleClose}
                                        >
                                            <MenuItem onClick={this.handleClose}> Refresh</MenuItem>
                                            <MenuItem onClick={this.handleClose}> Send feedback</MenuItem>
                                            <MenuItem onClick={this.handleClose}> Settings</MenuItem>
                                            <MenuItem onClick={this.handleClose}> Help </MenuItem>
                                            <MenuItem onClick={this.handleClose}> Sign out </MenuItem>
                                        </Menu>
                                    </div>
                                }

                                title="Shrimp and Chorizo Paella"
                                subheader={p.date}
                            />

                            <CardContent>
                                <Typography component="p">
                                    {p.desc}
                                </Typography>
                            </CardContent>


                        </Card>
                    )
                })}

            </div>


        );

    }
}
export default SCard;

