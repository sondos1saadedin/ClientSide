import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import AddIcon from 'material-ui-icons/Add';
import SaveIcon from 'material-ui-icons/Save';

import ShowChart from 'material-ui-icons/ShowChart';


const styles = {
    card: {
        minWidth: 370,
        minHeight: 400,
        zIndex: "88 !important",
    },
    media: {
        fontSize: '130px',
        marginBottom: 20,
        marginTop: 20,
        color: "#24b47e"

    },

    largeFont: {
        fontSize:22,
        color: "#6b7c93"
    },

    largerFont: {
        fontSize: 30,
        marginBottom: 20,
        color: "#24b47e"
    },


    // cardHeader : {
    //   fontSize = 25,
    // }
};

function AboutCard(props) {
    const {classes} = props;
    return (

        <div>
            <Card className={classes.card}>

                <CardContent>
                    <Typography align="center">
                        {(props.icon == "AddIcon") ? <AddIcon className={classes.media} color="primary"/> : null}
                        {(props.icon == "SaveIcon") ? <SaveIcon className={classes.media} color="primary"/> : null}

                        {(props.icon == "ShowChart") ? <ShowChart className={classes.media} color="primary"/> : null}
                    </Typography>
                    <Typography align="center" className={classes.largerFont}>
                        {props.title}
                    </Typography>
                    <Typography align="center" className={classes.largeFont}>
                        {props.desc}
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
}

AboutCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutCard);
