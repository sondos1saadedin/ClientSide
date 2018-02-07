import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
    state = {
        username: 'Sondos',
    };


    changeusernamehandler = (event) => {
        this.setState ( {
            username : event.target.value,
        });
        console.log("heeeeeeey");
    };

    render() {
        return (
            <div className="App">
                <UserOutput username={this.state.username}/>
                <UserInput changed= {this.changeusernamehandler.bind(this)} username={this.state.username}/>
            </div>
        );
    }
}

export default App;
