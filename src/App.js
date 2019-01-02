import React, { Component } from 'react';
import {Banner} from './App_css.js'
import Players from './components/GroupInfo';


class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){}

  render() {
    return (
      <div>
        <Banner>
          <h1>DnD 5e Encounter Generator</h1>
        </Banner>
        <Players/>
      </div>
    )
  }
}

export default App;