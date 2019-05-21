import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Stepper, {Step, StepButton} from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import './HomePage.css';
import StepIcon from "material-ui/es/Stepper/StepIcon";
import createMuiTheme from "material-ui/es/styles/createMuiTheme";
import purple from "material-ui/es/colors/purple";
import teal from "material-ui/es/colors/teal";

import MuiThemeProvider from "material-ui/es/styles/MuiThemeProvider";
import StepLabel from "material-ui/es/Stepper/StepLabel";
import {
    cyan500, cyan700,
    pinkA200, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
} from 'material-ui/es/colors';
import SignIn from "../BasePages/SignIn";
import SignUp from "../BasePages/SignUp";
const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: teal,
        textColor: teal
    },
    status: {
        danger: "orange",
    },
});
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: 60,
    },

    stepper: {
        iconColor: 'green' // or logic to change color
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    iconContainer: {
        transform: 'scale(2)',
        color : "#ffffff",
        textColor: "#ffffff",
        backgroundColor: "#ffffff"
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {

        marginTop: 30,
        marginBottom: 12,
    },
    above:{

        position: "relative",
        display: "flex",
        marginTop: 100,
        marginBottom: 100,
    },

    largeFontStyle:{
        fontSize:50,
    }
});

function getSteps() {
    return ['Create a User', 'Login in', 'Write test scenario'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <SignUp/>;
        case 1:
            return <SignIn/>;
        case 2:
            return 'Step 3: This is the bit I really care about!';
        default:
            return 'Unknown step';
    }
}

class HomePageContent extends React.Component {
    state = {
        activeStep: 0,
        completed: new Set(),
        skipped: new Set(),
    };

    totalSteps = () => {
        return getSteps().length;
    };

    isStepComplete(step) {
        return this.state.completed.has(step);
    }

    completedSteps() {
        return this.state.completed.size;
    }

    allStepsCompleted() {
        return this.completedSteps() === this.totalSteps() - this.skippedSteps();
    }

    isLastStep() {
        return this.state.activeStep === this.totalSteps() - 1;
    }

    isStepOptional = step => {
        return step === 1;
    };

    isStepSkipped(step) {
        return this.state.skipped.has(step);
    }

    handleSkip = () => {
        const {activeStep} = this.state;
        if (!this.isStepOptional(activeStep)) {
            // You probably want to guard against something like this
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }
        const skipped = new Set(this.state.skipped);
        skipped.add(activeStep);
        this.setState({
            activeStep: this.state.activeStep + 1,
            skipped,
        });
    };

    skippedSteps() {
        return this.state.skipped.size;
    }

    handleNext = () => {
        let activeStep;

        if (this.isLastStep() && !this.allStepsCompleted()) {
            // It's the last step, but not all steps have been completed
            // find the first step that has been completed
            const steps = getSteps();
            activeStep = steps.findIndex((step, i) => !this.state.completed.has(i));
        } else {
            activeStep = this.state.activeStep + 1;
        }
        this.setState({
            activeStep,
        });
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
    };

    handleStep = step => () => {
        this.setState({
            activeStep: step,
        });
    };

    handleComplete = () => {
        const completed = new Set(this.state.completed);
        completed.add(this.state.activeStep);
        this.setState({
            completed,
        });
        /**
         * Sigh... it would be much nicer to replace the following if conditional with
         * `if (!this.allStepsComplete())` however state is not set when we do this,
         * thus we have to resort to not being very DRY.
         */
        if (completed.size !== this.totalSteps() - this.skippedSteps()) {
            this.handleNext();
        }
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
            completed: new Set(),
            skipped: new Set(),
        });
    };

    render() {
        const {classes} = this.props;
        const steps = getSteps();
        const {activeStep} = this.state;

        return (
            <section className={classes.above}>
                <div className="container-lg">
                    <div className={classes.root}>
                        <MuiThemeProvider theme={theme}>

                        <Stepper alternativeLabel nonLinear activeStep={activeStep} className={classes.stepper}>
                            {steps.map((label, index) => {
                                const props = {};
                                const buttonProps = {};
                                if (this.isStepOptional(index)) {
                                    buttonProps.optional = "";
                                }
                                if (this.isStepSkipped(index)) {
                                    props.completed = false;
                                }
                                return (
                                    <Step key={label} {...props}>

                                        <StepLabel classes={{
                                            iconContainer: classes.iconContainer,
                                        }}
                                            onClick={this.handleStep(index)}
                                            completed={this.isStepComplete(index)}
                                            {...buttonProps}
                                        >
                                            {label}
                                        </StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                        </MuiThemeProvider>
                        <div>
                            {this.allStepsCompleted() ? (
                                <div>
                                    <Typography className={classes.instructions}>
                                        All steps completed - you&quot;re finished
                                    </Typography>
                                    <Button onClick={this.handleReset}>Reset</Button>
                                </div>
                            ) : (
                                <div>
                                    <Typography align={"center"}
                                        className={classes.instructions}>{getStepContent(activeStep)}</Typography>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

HomePageContent.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(HomePageContent);