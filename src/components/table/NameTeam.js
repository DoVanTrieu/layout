import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
export default class NameTeam extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="headerCard">
                <div className="teamName">{data.name} Team</div>
                <div>
                    <FontAwesomeIcon className="iconName" icon={faEdit} />
                    <FontAwesomeIcon className="iconName" icon={faTrash} />
                </div>

            </div>
        )
    }
}
