import React from 'react';
import Select from 'react-select';
import './styles/custom.css';
import sword from "./images/sword.png" 
import {GroupInfo, AddPlayer, PlayersDiv} from './styles/group_info_css.js'


// value:
//[0] easy, [1] medium, [2] hard, [3] deadly
const options = [
  { value: [25, 50, 75, 100], label: '1' },
  { value: [50, 100, 150, 200], label: '2' },
  { value: [75, 150, 225, 400], label: '3' },
  { value: [125, 250, 375, 500], label: '4' },
  { value: [250, 500, 750, 1100], label: '5' },
  { value: [300, 600, 900, 1400], label: '6' },
  { value: [350, 750, 1100, 1700], label: '7' },
  { value: [450, 900, 1400, 2100], label: '8' },
  { value: [500, 1100, 1600, 2400], label: '9' },
  { value: [600, 1200, 1900, 2800], label: '10' },
  { value: [800, 1600, 2400, 3600], label: '11' },
  { value: [1000, 2000, 3000, 4500], label: '12' },
  { value: [1100, 2200, 3400, 5100], label: '13' },
  { value: [1250, 2500, 3800, 5700], label: '14' },
  { value: [1400, 2800, 4300, 6400], label: '15' },
  { value: [1600, 3200, 4800, 7200], label: '16' },
  { value: [2000, 3900, 5900, 8800], label: '17' },
  { value: [2100, 4200, 6300, 9500], label: '18' },
  { value: [2400, 4900, 7300, 10900], label: '19' },
  { value: [2800, 5700, 8500, 12700], label: '20' },
];

class Players extends React.Component {
	constructor(){
		super();
		this.state = {
			selectedOption: '',
			players: [],
		};
	}

	componentDidMount(){}

	handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption);
  }

  addPlayer = () => {
  	if (this.state.selectedOption.label != null){
	  	let player = {level: this.state.selectedOption.label, id: Date.now(), xp_range: this.state.selectedOption.value}
	  	this.setState({
	  		players: [...this.state.players, player ]
	  	}, () => {
        this.props.getPlayers(this.state.players)
      });
  	}
  }

  removePlayer = (event) => {
  	console.log(event.target.id)
  	let eventId = parseInt(event.target.id)
  	let players = this.state.players
  	let filtered = []
  	console.log(typeof event.target.id)
  	for (let i in players){
  		if (players[i].id !== eventId){
  			filtered.push(players[i])
  		}
  	}
  	this.setState({
  		players: filtered
  	}, () => {
      this.props.removePlayer(filtered)
    });
    
  }

	render() {

		const { selectedOption } = this.state;
		let bol = false
		if (this.state.players.length > 0){
			bol = true
		}

		return (
      <GroupInfo>
        <h2>Create Party</h2>
	       <Select
	        value={selectedOption}
	        onChange={this.handleChange}
	        options={options}
          className="select"
	      />
	      <AddPlayer onClick={this.addPlayer}>Add Player</AddPlayer>
	      {bol? (
          <PlayersDiv>
          {this.state.players.map((p, i) => {
            return (
              <p className="player" key={p.id} id={p.id} onClick={this.removePlayer}><img className="sword" src={sword} alt="sword"/>  Level: <span className="monster-title3">{p.level}</span></p>
            )
          })}
          </PlayersDiv>
        ) :
          null
        }
      </GroupInfo>
		)
	}
}

export default Players;
