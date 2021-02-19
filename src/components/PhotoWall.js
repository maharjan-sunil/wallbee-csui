import React from "react";
import { Link } from "react-router-dom";

import Photo from "./Photo";
import PropTypes from "prop-types";

function PhotoWall(props) {
  return (
    <div>
      <Link className="addIcon" to="/addPhotos" />
      <div className="photoGrid">
        {props.posts.sort((x, y) => {
          return y.id - x.id;
        }).map((post, index) => (
          <Photo key={index} post={post} index={index} {...props} />
        ))}
      </div>
    </div>
  );
}

PhotoWall.propTypes = {
  post: PropTypes.array,
};

export default PhotoWall;
