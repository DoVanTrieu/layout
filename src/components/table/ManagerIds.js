import React, { Component } from 'react'

export default class ManagerIds extends Component {
    render() {
        const {data} = this.props;
        return (
            <div>
                  <div className="teamName ">{data.managerIds.length} Manager</div>
            </div>
        )
    }
}
