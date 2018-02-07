/**
 * Created by sondo on 05/02/2018.
 */
import React, {Component} from 'react';
import './UserOutput.css'

class UserOutput extends Component {
    render() {
        return (
            <div className="UserOutput">
                <p>Hello, my name is {this.props.username}</p>
                <p>Happy Coding day!</p>
            </div>
        )
    }
}
export default UserOutput;