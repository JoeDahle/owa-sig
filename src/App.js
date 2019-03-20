import React, { Component } from "react";
import logo from "./images/logo.png";
import fb from "./images/facebook.png";
import tw from "./images/twitter.png";
import ig from "./images/instagram.png";
import yt from "./images/youtube.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="content">
            <a href="https://thelisttv.com">
              <img className="logo" src={logo} alt="The List Logo" />
            </a>
            <div className="desc">
              <p className="name">Joe</p>
              <p>IT Operations</p>
              <p>
                <a href="mailto:joe@email.com">joe@email.com</a>
              </p>
              <p>Office: 000.000.0000 | Cell: 000.000.0000</p>
            </div>
          </div>
          <hr />
          <div className="social">
            <a href="https://www.facebook.com/thelistshowtv/">
              <img src={fb} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/thelistshowtv/">
              <img src={ig} alt="instagram" />
            </a>
            <a href="https://twitter.com/TheListShowTV">
              <img src={tw} alt="twitter" />
            </a>
            <a href="https://www.youtube.com/user/TheListShowTV">
              <img src={yt} alt="youtube" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
