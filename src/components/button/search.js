import React, { Component } from "react";
import "./search.css";
import "font-awesome/css/font-awesome.min.css";
import { setFilterList } from '../../actions';
import { connect } from 'react-redux'


 class search extends Component {
   
    render() {
      const handleChange = (e) => {
        const { dispatch } = this.props;
        const valueSearch = e.target.value;
         dispatch(setFilterList(valueSearch));
        };  
        return (
            <div>
                <form className="searchTab" >
                    <i className="fa fa-search" style={{ margin: 8 }} />

                    <input
                        type="search"
                        className="search"
                        onChange={handleChange}
                    />
                </form>
            </div>
        );
    }
}
export default connect()(search)
