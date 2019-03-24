import React from "react";
import Proptypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

class SearchItem extends React.Component {
  renderTitle = title => {
    if (title.length < 20) {
      return <h5 className="search-tile-title">{title}</h5>;
    }
    if (title.length < 35) {
      return <h5 className="search-tile-title long-title">{title}</h5>;
    }
    return <h5 className="search-tile-title longer-title">{title}</h5>;
  };

  renderDesc = desc => {
    if (desc.length > 150) {
      // eslint-disable-next-line no-param-reassign
      desc = desc.substring(0, 150);
      return (
        <p className="search-tile-desc">
          {desc}
          ...
        </p>
      );
    }
    return <p className="search-tile-desc">{desc}</p>;
  };

  renderPic = movie => {
    if (movie.thumbnail !== null) {
      return <img alt="img" className="tile-img " src={movie.thumbnail} />;
    }
    return (
      <img
        className="tile-img"
        alt="moviePoster"
        src="http://eskipaper.com/images/sci-fi-pictures-2.jpg"
      />
    );
  };

  render() {
    const { movie } = this.props;
    return (
      <li>
        <Link className="search-tile" to={`/movie/${movie.id}`}>
          <div className="tile-img">{this.renderPic(movie)}</div>
          <div className=" photo-overlay">
            <div className="tile-text-container">
              <div className="search-playbtn-container">
                <button className="playBtn ">▶</button>
              </div>
              <div>{this.renderTitle(movie.title)}</div>
              <div>{this.renderDesc(movie.sinopsis)}</div>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}
SearchItem.propTypes = {
  movie: Proptypes.object
};
export default withRouter(SearchItem);
