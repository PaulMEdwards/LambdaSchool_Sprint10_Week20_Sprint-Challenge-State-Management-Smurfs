import React, { Component } from "react";
import logo from '../brainy-news.png';

import SmurfyData from './SmurfySearch';

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="logo" alt="logo" />&nbsp;<h1>SMURFS! 2.0 W/ Redux</h1>
        </header>
        <section className="SuperSecretSmurfySearch">
          <SmurfyData />
        </section>
      </div>
    );
  }
}

export default App;
