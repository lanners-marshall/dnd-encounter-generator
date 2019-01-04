import React, { Component } from 'react';
import {Banner, GroupAndSearch, Container, AppContainer} from './App_css.js'
import Players from './components/GroupInfo';
import SearchInfo from './components/SearchInfo';
import MonsterList from './components/monsterList/monsterList';
import dnd from './components/images/dnd.png'
import './components/styles/custom.css'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: [],
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
      <AppContainer>
        <Banner>
          <img src={dnd} alt="dungeons and dragons" className="dnd" />
          <h1>Encounter Generator</h1>
        </Banner>

        <Container>
          <GroupAndSearch>
            <Players getPlayers={this.getPlayers} removePlayer={this.removePlayer}/>
            <SearchInfo
              getEnvironment={this.getEnvironment}
              getEncounterDifficulty={this.getEncounterDifficulty}
              getMonsterSize={this.getMonsterSize}
              getMonsterType={this.getMonsterType}
              getMinChallenge={this.getMinChallenge}
              maxChallenge={this.maxChallenge}
            />

          </GroupAndSearch>
          <MonsterList 
            players={this.state.players}
            difficulty={this.state.encounterDifficulty}
            size={this.state.monsterSize}
            type={this.state.monsterType}
            minCr={this.state.minChallenge}
            maxChallenge={this.state.maxChallenge}
            environment={this.state.environment}
          />
        </Container>
      </AppContainer>
    )
  }
}

export default App;