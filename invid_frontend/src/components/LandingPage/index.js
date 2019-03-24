import React from "react";
import { Slider } from "./presentations";
import HomeList from "./HomeList";
import { Nav, Footer } from "@/components/Global";
import { isAuth } from "../Global/LocalStorage/storage";

class LandingPage extends React.Component {
  state = {
    scrolling: false
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // handleScroll = event => {
  //   console.log(`scrolly:${window.pageYOffset}`);
  //   if (window.pageYOffset === 0) {
  //     this.state({ scrolling: false });
  //   } else if (window.pageYOffset > 50) {
  //     this.state({ scrolling: true });
  //   }
  // };

  render() {
    const { scrolling } = this.state;
    return (
      <div className="front-page" onChange={this.handleScroll}>
        {/* <div className={`top-menu ${scrolling ? "black" : "top-menu"}`}> */}
        <ul className="top-container">
          <Nav />
        </ul>
        {/* </div> */}
        <div className="main-body">
          <Slider />
          <HomeList />
          <Footer />
        </div>
      </div>
    );
  }
}

export default LandingPage;
