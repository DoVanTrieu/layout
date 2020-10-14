import React from 'react';
import './App.css';
import Button from './button/button.js'
import Search from './button/search.js'
import Table from './table/table.js'
import mockData from "./data/TeamJson"

class App extends React.Component {
  state = {
    data: mockData,
    displayData: mockData
  }

  pushData = () => {
    console.log(mockData)
    //push one more team to this.state.data
    const cards = [
      ...this.state.displayData,
      {"id":"d1885bc1-97d9-4ea3-aad5-191fc800d3ef","name":"Kylie","creator":"e310b134-405b-4ab8-bdaf-28fec5e8c787","memberIds":[{"id":"8261d750-f1db-454f-b3ec-2597602f7bd8","email":"2019nab@veritone.com","firstName":"NAB","lastName":"2019","status":"active"},{"id":"f14e2c99-6a88-499b-8547-7740c7322e25","email":"mkennedy+mediademo@veritone.com","firstName":"Michael","lastName":"Kennedy","status":"active"},{"id":"f4163c1d-6758-40a8-9433-1d454345f6bf","email":"rupert.watson@jigsaw24.com","firstName":"Rupert","lastName":"Watson","status":"active"},{"id":"180d6ac9-02a5-4053-9f8e-cff7b7fed00b","email":"speterson+mediademo@veritone.com","firstName":"Sven","lastName":"Peterson","status":"active"},{"id":"83fda858-8fb2-4741-a1d7-d304dc1a20e7","email":"tringering+mediademo@veritone.com","firstName":"Tristan","lastName":"Ringering","status":"active"},{"id":"dad2e8da-2598-4f39-8f0b-1ea061ff89c7","email":"iasher+mediademo@veritone.com","firstName":"Ilan","lastName":"Asher","status":"active"}],"managerIds":[{"id":"e310b134-405b-4ab8-bdaf-28fec5e8c787","email":"kchao+mediademo@veritone.com","firstName":"Kylie","lastName":"Chao","status":"active"},{"id":"96aaa0d3-95a0-4357-a579-1a190e1ca9af","email":"ktruong+mediademo@veritone.com","firstName":"Khuong","lastName":"Truong","status":"active"},{"id":"b745eb04-0410-446d-a1af-440877d32a6c","email":"tmcbride+mediademo@veritone.com","firstName":"Tami","lastName":"McBride","status":"active"},{"id":"298af11e-ced9-4bd5-acb0-0fc390264188","email":"gbateman+mediademo@veritone.com","firstName":"Garron","lastName":"Bateman","status":"active"}]}

    ]; // This will create a new array from the old one with a new additional value
    this.setState({ displayData: cards });
  }
  
  filterList = (valueSearch) => {
    console.log('this.state', this.state)
    console.log('filterList', valueSearch)
    const { data } = this.state;
    const updatedList = data.filter( team => {
      return team.name.toLowerCase().indexOf(
        valueSearch.toLowerCase()) !== -1
    });
    console.log('updatedList', updatedList )
    this.setState({ displayData: updatedList});
  } 
  
  
  render() {
    const { displayData } = this.state;
    console.log('this.state', this.state)
    // console.log('data', data)
    return (
      <div className="App">
        <header className="App-header">
          <div className="app1">
            <Button shoot={this.pushData}/>
            <Search onChange={this.filterList} />
          </div>
          <div className="allTable">
            <Table data={displayData} />
          </div>
  
  
        </header>
      </div>
    );
  }
}

export default App;
