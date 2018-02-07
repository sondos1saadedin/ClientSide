/**
 * created by sondo on 05/02/2018.
 */
import React, {Component} from 'react';
import './UserInput.css'

class UserInput extends Component {

    render() {
        return (
            <div className="UserInput">
                <input type="text" onChange={this.props.changed} value={this.props.username}/>
            </div>
        )
    }
}

export default UserInput;