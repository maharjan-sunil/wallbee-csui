import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.Lists.map((list, index) => (
            <li key={index}> {list}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default List;
