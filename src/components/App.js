import React from 'react';
import './App.css';
import Button from './button/button.js'
import Search from './button/search.js'
import Table from './table/table.js'
import { connect } from 'react-redux'
import mockData from './data/TeamJson.json'
class App extends React.Component {
  state = {
    displayData: mockData,
    valueSearch:''
  }
  
  static getDerivedStateFromProps(nextProps, prevState){
    console.log('prevState',prevState.valueSearch)
    const updateLists = nextProps.data.filter(team => {
      return team.name.toLowerCase().indexOf(
        prevState.valueSearch.toLowerCase()) !== -1
    });
    if(nextProps.data!==prevState.displayData){
      return { displayData: updateLists};
   }
   else return null;
 }

  filterList = (valueSearch) => {
    const { data } = this.props;
    const updatLists = data.filter(team => {
      return team.name.toLowerCase().indexOf(
        valueSearch.toLowerCase()) !== -1
    });
    console.log('updatLists',updatLists)
    this.setState({ displayData: updatLists,valueSearch });
  }
  
  render() {
    const{ displayData } = this.state;
    // const { data } = this.props;
    // console.log('data',data)
    // const { valueSearch } = this.state;
    // const displayData = data.filter(team => {
    //   return team.name.toLowerCase().indexOf(
    //     valueSearch.toLowerCase()) !== -1
    // });
    return (
      <div className="App">
        <header className="App-header">
          <div className="app1">
            <Button  />
            <Search onChange={this.filterList} />
          </div>
          <div className="allTable">
            <Table data={ displayData } />
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // displayFilter: state.team.dataFilter
  data: state.team.data
})
export default connect(mapStateToProps)(App);

