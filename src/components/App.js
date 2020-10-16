import React from 'react';
import './App.css';
import Button from './button/button.js'
import Search from './button/search.js'
import Table from './table/table.js'
import { connect } from 'react-redux'

class App extends React.Component {
  

  render() {
    const { displayFilter } = this.props;
    // console.log('this.props', this.props)
    return (
      <div className="App">
        <header className="App-header">
          <div className="app1">
            <Button  />
            <Search  />
          </div>
          <div className="allTable">
            <Table data={displayFilter} />
          </div>


        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // data: state.data,
  // displayData: state.displayData,
  displayFilter: state.team.dataFilter

})
export default connect(mapStateToProps)(App);

