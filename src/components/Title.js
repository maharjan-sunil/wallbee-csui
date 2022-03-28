import React, { Component } from "react";

class Title extends Component {
  componentDidMount() {
    console.log("this is componentDidMount");
  }

  render() {
    return <h1> {this.props.Title} </h1>;
  }
}

export default Title;
