import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import StarJQuery from "./stars";
import "./stars.css";

class StarVotes extends React.Component {
  clickHandler = () => {
    const rating = ReactDOM.findDOMNode(this.refs.ratingButton).value;
    console.alert(rating);
  };

  componentDidMount() {
    StarJQuery(this.clickHandler);
  }

  render() {
    return (
      <div>
        <form>
          <section className="rating-widget">
            <div className="rating-stars text-center seleccion">
              <ul id="stars" className="1">
                <li
                  className="star"
                  title="Poor"
                  data-value="1"
                  id="<%= film.id %>"
                >
                  <i className="fa fa-star fa-fw" />
                </li>
                <li
                  className="star"
                  title="Not Bad"
                  data-value="2"
                  id="<%= film.id %>"
                >
                  <i className="fa fa-star fa-fw" />
                </li>
                <li
                  className="star"
                  title="Good"
                  data-value="3"
                  id="<%= film.id %>"
                >
                  <i className="fa fa-star fa-fw" />
                </li>
                <li
                  className="star"
                  title="Very Good"
                  data-value="4"
                  id="<%= film.id %>"
                >
                  <i className="fa fa-star fa-fw" />
                </li>
                <li
                  className="star"
                  title="Excelent"
                  data-value="5"
                  id="<%= film.id %>"
                >
                  <i className="fa fa-star fa-fw" />
                </li>
              </ul>
              <div className="clearfix" />
              <div className="text-message" id="<%= film.id %>" />
              <div className="clearfix" />
            </div>
          </section>
        </form>
      </div>
    );
  }
}

export default StarVotes;
