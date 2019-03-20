import React, { Component } from "react";
import logo from "./images/logo.png";
import fb from "./images/facebook.png";
import tw from "./images/twitter.png";
import ig from "./images/instagram.png";
import yt from "./images/youtube.png";
import title from "./images/JessieJacobsVizRTArt.png";
import shape from "./images/Shape1.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="background">
          <div id="TheListLogo100x100">
            <img src={logo} />
          </div>
          <div id="facebook">
            <img src={fb} />
          </div>
          <div id="instagram">
            <img src={ig} />
          </div>
          <div id="twitter">
            <img src={tw} />
          </div>
          <div id="youtube">
            <img src={yt} />
          </div>
          <div id="JessieJacobsVizRTArt">
            <img src={title} />
          </div>
          <div id="Shape1">
            <img src={shape} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
