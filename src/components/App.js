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
    displayData: this.props.addData,
    valueSearch: '',
    cards: []
  } 

  static getDerivedStateFromProps(nextProps, prevState) {
  
    const updateLists2 = nextProps.addData.filter(team => {
      return team.name.toLowerCase().indexOf(
        prevState.valueSearch.toLowerCase()) !== -1
    });
    console.log('prevState.displayData',prevState.displayData)
    
    if (nextProps.addData !== prevState.displayData && prevState.displayData.length === 0  ) {
      console.log('updateLists2updateLists2', updateLists2);
      return { displayData: updateLists2 };
    }
    
    

    return null;
  }
  addTeam = (cards) => {
    console.log('cards', cards);
    const updateLists3 = cards.filter(team => {
      return team.name.toLowerCase().indexOf(
        this.state.valueSearch.toLowerCase()) !== -1
    });
    console.log('updateLists3', updateLists3);
    this.setState({displayData:updateLists3,cards });
  }
  filterList = (valueSearch) => {
    const { addData } = this.props;
    const updatLists = addData.filter(team => {
      return team.name.toLowerCase().indexOf(
        valueSearch.toLowerCase()) !== -1
    });
    console.log('updatLists', updatLists)
    this.setState({ displayData: updatLists, valueSearch });
  }

  render() {
    const { displayData } = this.state;
    console.log('displayData render', displayData)
    const { loading } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <div className="app1">
            <Button onClick={this.addTeam} />
            <Search onChange={this.filterList} />
          </div>
          <div className="allTable">
            <Table data={displayData} />
            <Data />
            {/* {loading === false ? (
              <Data />
            ) : (
                <h2>Loading . . . 
                  <CircularProgress />
                </h2>
              )} */}
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // dataFilter: state.team.data,
  // loading: state.addTeam.isLoading,
  addData: state.addTeam.data
})

export default connect(mapStateToProps)(App);

