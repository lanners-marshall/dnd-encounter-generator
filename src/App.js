import React, { Component } from 'react';
import {Banner, GroupAndSearch, Container} from './App_css.js'
import Players from './components/GroupInfo';
import SearchInfo from './components/SearchInfo';
import dnd from './components/images/dnd.png'
import './components/styles/custom.css'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: [],
      numberOfMonsters: '',
      encounterDifficulty: '',
      monsterSize: '',
      environment: '',
      monsterType: '',
      minChallenge: '',
      maxChallenge: ''
    };
  }

  componentDidMount(){}

  getPlayers = (players) => {
    this.setState({
      players: players,
    })
  }

  getNumMonsters = (num) => {
    this.setState({
      numberOfMonsters: num,
    })
  }

  getEncounterDifficulty = (difficulty) => {
    this.setState({
      encounterDifficulty: difficulty,
    })
  }

  getMonsterSize = (size) => {
    this.setState({
      monsterSize: size,
    })
  }

  getEnvironment = (environment) => {
    this.setState({
      environment: environment,
    })
  }

  getMonsterType = (type) => {
    this.setState({
      monsterType: type,
    })
  }

  getMinChallenge = (min) => {
    this.setState({
      minChallenge: min,
    })
  }

  maxChallenge = (max) => {
    this.setState({
      maxChallenge: max,
    })
  }

  removePlayer = (filtered) => {
    this.setState({
      players: filtered,
    })
  }

  render() {
    return (
      <div>
        <Banner>
          <img src={dnd} alt="dungeons and dragons" className="dnd" />
          <h1>Encounter Generator</h1>
        </Banner>

        <Container>
          <GroupAndSearch>
            <Players getPlayers={this.getPlayers} removePlayer={this.removePlayer}/>
            <SearchInfo
              getNumMonsters={this.getNumMonsters}
              getEnvironment={this.getEnvironment}
              getEncounterDifficulty={this.getEncounterDifficulty}
              getMonsterSize={this.getMonsterSize}
              getEnvironment={this.getEnvironment}
              getMonsterType={this.getMonsterType}
              getMinChallenge={this.getMinChallenge}
              maxChallenge={this.maxChallenge}
            />

          </GroupAndSearch>
        </Container>
      </div>
    )
  }
}

export default App;