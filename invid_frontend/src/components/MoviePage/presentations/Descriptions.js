import React from "react";
import Proptypes from "prop-types";

const descText = {
  zIndex: "100"
};

const Poster = ({ theMovie }) => (
  <div id="desc-container">
    <h4 className="desc-item">
      <div className="movie-title">
        {theMovie.title} / {theMovie.year_release}
      </div>
    </h4>
    <p id="overview" className="desc-item">
      <b className="desc-title">Sinopsis: </b>
      {theMovie.sinopsis}
    </p>
  </div>
);

Poster.propTypes = {
  theMovie: Proptypes.object
};

export default Poster;
