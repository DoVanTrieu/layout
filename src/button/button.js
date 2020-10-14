import React, { Component } from 'react'
import './button.css'
export default class button extends Component {
    render() {
        const { shoot } = this.props;
        return (
            <div>
                <div>
                    <button onClick={shoot} className="button">CREAT NEW TEAM</button>
                </div>
            </div>
        )
    }
}
