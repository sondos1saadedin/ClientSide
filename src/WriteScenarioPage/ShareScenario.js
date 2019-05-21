import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import ShareIcon from 'material-ui-icons/Share';
export default class ShareScenario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            hisEmail: "",
        };
    }


    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
        this.props.closeMe();
    };

    handleCloseAndShare = () => {
        this.setState({open: false});
        this.props.closeMe();

        fetch('http://localhost:8090/share-scenario?myEmail=' + this.props.myEmail
            + '&hisEmail=' + this.state.hisEmail
            + '&sName=' + this.props.sName)
            .then(response => response.json())
            .then(data => {
            });
    }
    handleOnChangeEmail = (event) => {
        this.setState({hisEmail: event.target.value});
    };

    componentDidMount() {
        this.setState({open: this.props.open});
        console.log("shareddddddddddddddddddddddd");
    }

    render() {
        return (
            <div>
                {/*<Button onClick={this.handleClickOpen}>Open form dialog</Button>*/}
                <Dialog
                    open={this.props.open}
                    onClose={this.props.closeMe}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Share</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To Share this Scenario, please enter the email address
                            of the user who you want to share with

                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                            onChange={this.handleOnChangeEmail}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleCloseAndShare} color="primary">
                            <ShareIcon/>
                            Share
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
