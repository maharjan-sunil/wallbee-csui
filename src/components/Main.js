import React, { Component } from "react";
import { Route } from "react-router-dom";

import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";

class Main extends Component {

  componentDidMount(){
    this.props.loadPostFromDatabase();
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Title Title={"Covid 2019"} />
              <PhotoWall {...this.props} />
            </div>
          )}
        />
        <Route
          exact
          path="/addPhotos"
          render={({history}) => <AddPhoto {...this.props} onHistory={history} />}
        />
      </div>
    );
  }
}

export default Main;
