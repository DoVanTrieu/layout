import React, { Component } from "react";
import { setData } from "../../actions";
import { connect } from "react-redux";
class Data extends Component {
  componentDidMount() {
    // fetch("http://localhost:8003/1/TeamJson.json")
    //   .then((response) => response.json())
    //   .then((data) => { setTimeout(() =>  
    //     {
    //       this.props.setData(data);},3000)
    //   });
    this.props.fetchData()
  }
  render() {
    return <div></div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(setData(data)),
  fetchData: () => dispatch({ type: "API_CALL_REQUEST" })
});

export default connect(null, mapDispatchToProps)(Data);