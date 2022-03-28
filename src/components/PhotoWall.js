import React from "react";
import { Link } from "react-router-dom";

import Photo from "./Photo";
import PropTypes from "prop-types";

class PhotoWall extends React.Component {
  constructor() {
  }
  render() {
    return (
      <div>
        <Link className="addIcon" to="/addPhotos" />
        <div className="photoGrid">
          {this.props.posts
            .sort((x, y) => {
              return y.id - x.id;
            })
            .map((post, index) => (
              <Photo key={index} post={post} index={index} {...props} />
            ))}
        </div>
      </div>
    );
  }
}

PhotoWall.propTypes = {
  post: PropTypes.array,
};

export default PhotoWall;
