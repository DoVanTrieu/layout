import React from 'react';
import './App.css';
import Button from './button/button.js'
import Search from './button/search.js'
import Table from './table/table.js'
import { connect } from 'react-redux'
import mockData from './data/TeamJson.json'
class App extends React.Component {
  state = {
    
    valueSearch:''
  }

  filterList = (valueSearch) => {
    this.setState({ valueSearch });
  }
  // componentWillReceiveProps(nextProps) {
    // const { data } = this.props
    // const displayData = data.filter(team => {
    //   return team.name.toLowerCase().indexOf(
    //     valueSearch.toLowerCase()) !== -1
    // });
    //  if (nextProps.displayData !== displayData) {
    //    this.setState({ displayData })
    //  }
    // }
  render() {
    const { data } = this.props;
    const { valueSearch } = this.state;
    const displayData = data.filter(team => {
      return team.name.toLowerCase().indexOf(
        valueSearch.toLowerCase()) !== -1
    });
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

