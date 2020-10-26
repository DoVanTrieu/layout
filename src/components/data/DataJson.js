import React, { Component } from "react";
import { setData } from "../../actions";
import { connect } from "react-redux";
class Data extends Component {
  componentDidMount() {
    fetch("http://localhost:8003/1/TeamJson.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.props.setData(data);
      });
  }
  render() {
    return <div></div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(setData(data)),
});

export default connect(null, mapDispatchToProps)(Data);