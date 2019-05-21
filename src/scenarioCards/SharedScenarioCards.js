/**
 * Created by sondo on 20/04/2018.
 */
import React from 'react';
import ScenarioCard from "./ScenarioCard";
import {connect} from "react-redux";
import {Router} from "react-router-dom";
import ScenarioTable from "../WriteScenarioPage/ScenarioTable";
import EditScenarioTable from "../WriteScenarioPage/EditScenarioTable";
import TestResult from "../UserPage/TestResult";


class SharedScenarioCards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scenarios: [],
            isEdit: false,
            isResult: false,
            editScenarioData : ""

        }
    }

    componentDidMount() {
        fetch('http://localhost:8090/get-shared-scenarios?email=' + this.props.email)
            .then(response => response.json())
            .then(data => {
                this.setState({scenarios: data});
                console.log(this.state.scenarios[0]);
            });
    }

    editScenario(scenario) {
        this.setState({
            isEdit: true,
            editScenario: scenario
        });
        console.log("kdlsajhsdkhkasjhdglk")
    }


    showResult(scenario) {
        this.setState({
            isResult: true,
            editScenario: scenario
        });
        console.log("ttttt")
    }

    render() {

        return (
                <div>

                    { (!this.state.isEdit && !this.state.isResult ) ?  <div>
                    {this.state.scenarios.map(scenario => {
                        return <ScenarioCard
                        email={scenario.email}
                        url={scenario.url.substring(scenario.url.indexOf("//") + 2)}
                        title={scenario.title}
                        description={scenario.description}
                        date={new Date(scenario.date).toUTCString()}
                        name={this.props.username.charAt(0)}
                        clickMe = {() => {
                        this.editScenario(scenario)}}

                        clickMe2 = {() => {
                            this.showResult(scenario)
                        }}/>
                    })}</div>

                        : ((this.state.isEdit) ? <EditScenarioTable scenario = {this.state.editScenario}/>: <TestResult scenario = {this.state.editScenario} />)
                    }
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        username: state.userName,
        email: state.userEmail
    }
};



export default connect(mapStateToProps)(SharedScenarioCards);