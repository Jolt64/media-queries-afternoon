import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="menuText">Start Bootstrap</div>
          <div className="menuButton">Menu &#9776;</div>
          <div className="menuBar">
              <button>SERVICES</button>
              <button>PORTFOLIO</button>
              <button>ABOUT</button>
              <button>CONTACT</button>
          </div>
        </header>
        <section className="landingSection">
          <div className="greetingBlock">
            <p className="welcomeSpan">Welcome To Our Studio!</p>
            <p className="greetingSpan">IT'S NICE TO MEET YOU</p>
            <div className="tellMeMoreButton">Tell Me More</div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
