import React from "react";
import Proptypes from "prop-types";

const Poster = ({ thumbnail }) => (
  <div id="poster-container">
    <img id="poster" src={thumbnail} alt="poster" />
  </div>
);

Poster.propTypes = {
  thumbnail: Proptypes.string
};

export default Poster;
