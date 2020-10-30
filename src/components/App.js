import React from 'react';
import './App.css';
import Button from './button/button.js'
import Search from './button/search.js'
import Table from './table/table.js'
import { connect } from 'react-redux'
import Data from './data/DataJson'
import CircularProgress from '@material-ui/core/CircularProgress';
class App extends React.Component {

  state = {
    displayData: this.props.dataFilter,
    valueSearch: ''
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const updateLists = nextProps.dataFilter.filter(team => {
      return team.name.toLowerCase().indexOf(
        prevState.valueSearch.toLowerCase()) !== -1
    });
    const updateLists2 = nextProps.addData.filter(team => {
      return team.name.toLowerCase().indexOf(
        prevState.valueSearch.toLowerCase()) !== -1
    });
    // console.log('nextProps', nextProps)
   if (nextProps.addData !== prevState.displayData && nextProps.addData.length > 0){
      return { displayData: updateLists2 };
    }
    if (nextProps.dataFilter !== prevState.displayData) {
      return { displayData: updateLists };
    }
   return null;
  }
  addTeam = (addData) => {
    this.setState({ displayData: addData});
  }
  filterList = (valueSearch) => {
    const { dataFilter } = this.props;
    const { displayData } = this.state;
    console.log('displayData',displayData)
    console.log('dataFilter',dataFilter)
    const updatLists = displayData.filter(team => {
      return team.name.toLowerCase().indexOf(
        valueSearch.toLowerCase()) !== -1
    });
    console.log('updatLists', updatLists)
    this.setState({ displayData: updatLists, valueSearch });
  }

  render() {
    const { displayData } = this.state;
    const { loading } = this.props;
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
            {loading === false ? (
              <Data />
            ) : (
                <h2>Loading . . . 
                  <CircularProgress />
                </h2>
              )}
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataFilter: state.team.data,
  loading: state.team.isLoading,
  addData: state.addTeam.data
})

export default connect(mapStateToProps)(App);

