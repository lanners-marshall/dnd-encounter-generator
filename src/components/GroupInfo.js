import React from 'react';
import Select from 'react-select';
import {Banner, GroupAndSearch, Container, GroupInfo, SearchInfo, AddPlayer, PlayersDiv} from './styles/group_info_css.js'

const options = [
  { value: 'level1', label: '1' },
  { value: 'level2', label: '2' },
  { value: 'level3', label: '3' },
  { value: 'leve4', label: '4' },
  { value: 'level5', label: '5' },
  { value: 'level6', label: '6' },
  { value: 'level7', label: '7' },
  { value: 'level8', label: '8' },
  { value: 'level9', label: '9' },
  { value: 'level10', label: '10' },
  { value: 'level11', label: '11' },
  { value: 'level12', label: '12' },
  { value: 'level13', label: '13' },
  { value: 'level14', label: '14' },
  { value: 'level15', label: '15' },
  { value: 'level16', label: '16' },
  { value: 'level17', label: '17' },
  { value: 'level18', label: '18' },
  { value: 'level19', label: '19' },
  { value: 'level20', label: '20' },
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
    console.log(`Option selected:`, selectedOption);
  }

  addPlayer = () => {
  	if (this.state.selectedOption.label != null){
	  	let player = this.state.selectedOption.label
	  	this.setState({
	  		players: [...this.state.players, player ]
	  	})
  	}
  }

	render() {

		const { selectedOption } = this.state;
		let bol = false
		if (this.state.players.length > 0){
			bol = true
		}

		return (
			<div>
			<Container>
          <GroupAndSearch>
            <GroupInfo>
              <h2>Form Group</h2>
				       <Select
				        value={selectedOption}
				        onChange={this.handleChange}
				        options={options}
				      />
				      <AddPlayer onClick={this.addPlayer}>add player</AddPlayer>
				      {bol? (
                <PlayersDiv>
                {this.state.players.map((p, i) => {
                  return (
                    <p key={i}>p-level {p}</p>
                  )
                })}
                </PlayersDiv>
              ) :
                null
              }
            </GroupInfo>

            <SearchInfo>
            </SearchInfo>
          </GroupAndSearch>
        </Container>
			</div>
		)
	}
}

export default Players;
