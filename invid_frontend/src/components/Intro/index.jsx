import React from "react";
import { Link } from "react-router-dom";
import introVideo from "./inVid_intro_ok.mp4";

const videoStyle = {
  width: "100%",
  zIndex: "0"
};

const skipLink = {
  position: "absolute",
  color: "0089f2",
  zIndex: "100",
  marginTop: "0",
  alignItem: "end"
};

class Intro extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/login");
    }, 30000);
  }

  render() {
    return (
      <div>
        <Link to="/login" className="btn btn-outline-primary" style={skipLink}>
          Skip
        </Link>
        <video
          src={introVideo}
          type="video/mp4"
          className="introVideo"
          autoPlay="true"
          loop
          style={videoStyle}
        />
      </div>
    );
  }
}

export default Intro;
