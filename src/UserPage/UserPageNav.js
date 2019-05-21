/**
 * Created by sondo on 03/04/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import { mailFolderListItems, otherMailFolderListItems, UserPageStyles } from '../store/reducer/PresistentData';



const styles = UserPageStyles;


class UserPageNav extends React.Component {
constructor(props) {
    super(props);
}
render() {
    const { classes, theme } = this.props;
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: classNames(classes.drawerPaper, !this.props.open && classes.drawerPaperClose),
            }}
            open={this.props.open}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={this.props.handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>{mailFolderListItems}</List>
            <Divider />
            <List>{otherMailFolderListItems}</List>
        </Drawer>
    )
}
}

UserPageNav.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(UserPageNav);