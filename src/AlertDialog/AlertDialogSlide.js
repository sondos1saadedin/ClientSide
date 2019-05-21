import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <Dialog
                    open={this.props.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.props.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                      Alert!!!
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {this.props.message}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="primary">
                            OK
                        </Button>
                        {/*<Button onClick={this.props.handleClose} color="primary">*/}
                            {/*Agree*/}
                        {/*</Button>*/}
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AlertDialogSlide;