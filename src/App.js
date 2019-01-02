import React, { Component } from 'react';
import {Banner, GroupAndSearch, Container} from './App_css.js'
import Players from './components/GroupInfo';
import SearchInfo from './components/SearchInfo';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount(){}

  getPlayers = (players) => {
    this.setState({
      players: players
    })
  }

  removePlayer = (filtered) => {
    this.setState({
      players: filtered
    })
  }

  render() {
    return (
      <div>
        <Banner>
          <h1>DnD 5e Encounter Generator</h1>
        </Banner>
        <Container>
          <GroupAndSearch>
            <Players getPlayers={this.getPlayers} removePlayer={this.removePlayer}/>
            <SearchInfo/>
          </GroupAndSearch>
        </Container>
      </div>
    )
  }
}

export default App;