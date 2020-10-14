import React, { Component } from 'react'

export default class MemberIds extends Component {
    render() {
        const {data} = this.props;
        return (
            <div>
                <div className="teamName ">{data.memberIds.length} User</div>
            </div>
        )
    }
}
