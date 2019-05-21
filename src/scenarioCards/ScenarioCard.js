import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import green from 'material-ui/colors/green';

import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import EditIcon from 'material-ui-icons/Edit';
import ShowChart from 'material-ui-icons/ShowChart';


import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import  image from './images/img.png';
import ShareScenario from "../WriteScenarioPage/ShareScenario";




const styles = theme => ({
    card: {
        minWidth: 400,
    },
    media: {
        height: 50,
        paddingTop: '15.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: green[500],
    },
});

class ScenarioCard extends React.Component {


    constructor(props) {
        super(props);
        this.state = { expanded: false , open: false };

    }

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };


    shareScenario =() => {
        this.setState({ open: true });

    }
    closeShare =() => {
        this.setState({ open: false });
    }
    render() {
        const { classes } = this.props;

        return (
            <div  style = {{margin : 32, display: "inline-block"}} >
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title={this.props.title}
                    />
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                {this.props.name}
                            </Avatar>
                        }
                        action={
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={this.props.title}
                        subheader={this.props.date}
                    />

                    <CardContent>
                        <Typography variant="subheading">
                            {this.props.url}
                        </Typography>
                        <Typography component="p">
                            {this.props.description}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Share" onClick = {this.shareScenario}>
                            <ShareIcon />
                        </IconButton>

                        <IconButton aria-label="Edit" onClick={this.props.clickMe}>
                            <EditIcon />
                        </IconButton>

                        <IconButton aria-label="Show Chart" onClick={this.props.clickMe2}>
                            <ShowChart />
                        </IconButton>
                    </CardActions>
                </Card>

                <ShareScenario myEmail = {this.props.email} sName = {this.props.title} open ={this.state.open} closeMe = {this.closeShare}/>
            </div>
        );
    }

}


ScenarioCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScenarioCard);
