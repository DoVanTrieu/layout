import React, { Component } from 'react'
import './table.css'
import CircleAvatar from './CircleAvatar.js'
import CircleAvatar2 from './CircleAvatar2.js'
import TeamName from './NameTeam.js'
import MemberIds from './MemberIds.js'
import ManagerIds from './ManagerIds.js'
export default class Table extends Component {
  render() {
    const { data } = this.props;
    // console.log('src/components/table/table.js', data)
    return (
      <div className='allTable1'>
        {data.map((item, index) => {
          // if (!item) {
            // console.log('This is', index, item)
          // }
          return <div className="table" key={data.id}>
            < TeamName data={item} />
            < MemberIds data={item} />
            < CircleAvatar data={item} />
            {/* <div className="teamName">{item.managerIds.length} Manager</div> */}
            < ManagerIds data={item} />
            < CircleAvatar2 data={item} />
          </div>
        })}
      </div>
    );
  }
}
