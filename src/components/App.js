import React from 'react';
import './App.css';
import Button from './button/button.js'
import Search from './button/search.js'
import Table from './table/table.js'
import { connect } from 'react-redux'
import Data from './data/DataJson'
class App extends React.Component {

  state = {
    displayData: this.props.data,
    valueSearch: ''
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const updateLists = nextProps.dataFilter.filter(team => {
      return team.name.toLowerCase().indexOf(
        prevState.valueSearch.toLowerCase()) !== -1
    });
    if (nextProps.dataFilter !== prevState.displayData) {
      return { displayData: updateLists };
    }
    else return null;
  }

  filterList = (valueSearch) => {
    const { dataFilter } = this.props;
    const updatLists = dataFilter.filter(team => {
      return team.name.toLowerCase().indexOf(
        valueSearch.toLowerCase()) !== -1
    });
    console.log('updatLists', updatLists)
    this.setState({ displayData: updatLists, valueSearch });
  }

  render() {
    const { displayData } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div className="app1">
            <Button />
            <Search onChange={this.filterList} />
          </div>
          <div className="allTable">
            <Table data={displayData} />
            <Data />
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  dataFilter: state.team.data
})
export default connect(mapStateToProps)(App);

