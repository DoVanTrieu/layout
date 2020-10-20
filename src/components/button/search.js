import React, { Component } from "react";
import "./search.css";
import "font-awesome/css/font-awesome.min.css";

export default class search extends Component {
    constructor(props) {
        super(props);
        this.state = { valueSearch: "" };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e) => {
        this.setState({
            valueSearch: e.target.value,
        });
        this.props.onChange(e.target.value);
    };
    render() {
        return (
            <div>
                <form className="searchTab" onSubmit={this.handleSubmit}>
                    <i className="fa fa-search" style={{ margin: 8 }} />

                    <input
                        type="search"
                        className="search"
                        value={this.state.valueSearch}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
// export default connect()(search)
