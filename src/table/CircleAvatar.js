import React, { Component } from 'react'

export default class CircleAvatar extends Component {

    render() {
        const { data } = this.props;
        // console.log('member---------------', data.memberIds)
        const newArray = data.memberIds.slice(0, 6); // array with 6 elements

        return (
        <div className="circleAvatar">
            <div className='allIcon'>
                {
                    newArray.map(icon => <div className="icon" key={icon && icon.memberIds}>
                        {icon && (<div>{icon.firstName[0]}</div>)}
                        {icon && (<div>{icon.lastName[0]}</div>)}
                        {!icon && (<div>QA</div>)}
                    </div>
                    )
                }
            </div>
            <div>{data.memberIds.length > 6 && (<div className="icon1">+ { data.memberIds.length - 6}</div>)}</div> 
         </div>
        );

    }
}



// item4.memberIds.map(icon => {
//     console.log();
//     return (<div className="icon" key={icon && icon.memberIds}></div>)
// }) 