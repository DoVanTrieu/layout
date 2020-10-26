import React, { Component } from 'react'

export default class CircleAvatar extends Component {

    render() {
        const { data } = this.props;
        const newArray2 = data.managerIds.slice(0, 6); // array with 6 elements

        return (
            <div className="circleAvatar">
            <div className='allIcon'>
                {
                    newArray2.map(icon => <div className="icon" key={icon && icon.managerIds}>
                        {icon && (<div>{icon.firstName[0]}</div>)}
                        {icon && (<div>{icon.lastName[0]}</div>)}
                        {!icon && (<div>QA</div>)}
                    </div>
                    )
                }
            </div>
            <div>{data.managerIds.length > 6 && (<div className="icon1">+ { data.managerIds.length - 6}</div>)}</div> 
            </div>
        );
    }
}
