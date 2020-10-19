import React, { Component } from 'react'

export default class MemberIds extends Component {
    render() {
        const {data} = this.props;
        // console.log('src/components/table/MemberIds.js', data)
        if (!data.memberIds) {
            console.log('------', data)
        }
        return (
            <div>
                <div className="teamName ">{data.memberIds.length} User</div>
            </div>
        )
    }
}
