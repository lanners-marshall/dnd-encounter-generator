import React from 'react';
import {SearchDiv, FlexDiv} from './styles/search_info_css.js'
import Select from 'react-select';
import './styles/custom.css'

const options = [
  { value: 'count1', label: '1' },
  { value: 'count2', label: '2' },
  { value: 'count3', label: '3' },
  { value: 'count4', label: '4' },
  { value: 'count5', label: '5' },
  { value: 'count6', label: '6' },
  { value: 'count7', label: '7' },
  { value: 'count8', label: '8' },
  { value: 'count9', label: '9' },
  { value: 'count10', label: '10' },
  { value: 'count11', label: '11' },
  { value: 'count12', label: '12' },
  { value: 'count13', label: '13' },
  { value: 'count14', label: '14' },
  { value: 'count15', label: '15' },
  { value: 'count16', label: '16' },
  { value: 'count17', label: '17' },
  { value: 'count17', label: '18' },
  { value: 'count18', label: '19' },
  { value: 'count19', label: '20' },
];

const options2 = [
  { value: 'easy', label: 'easy' },
  { value: 'medium', label: 'medium' },
  { value: 'hard', label: 'hard' },
  { value: 'deadly', label: 'deadly' },
]

const options3 = [
  { value: 'any', label: 'any' },
  { value: 'tiny', label: 'tiny' },
  { value: 'small', label: 'small' },
  { value: 'medium', label: 'medium' },
  { value: 'large', label: 'large' },
  { value: 'huge', label: 'huge' },
  { value: 'gargantuan', label: 'gargantuan' },
]

const options4 = [
  { value: 'any', label: 'any' },
  { value: 'aquatic', label: 'aquatic' },
  { value: 'arctic', label: 'arctic' },
  { value: 'cave', label: 'cave' },
  { value: 'coast', label: 'coast' },
  { value: 'desert', label: 'desert' },
  { value: 'dungeon', label: 'dungeon' },
  { value: 'forest', label: 'forest' },
  { value: 'hill', label: 'hill' },
  { value: 'mountain', label: 'mountain' },
  { value: 'grass land', label: 'grass land' },
  { value: 'planar', label: 'planar' },
  { value: 'ruins', label: 'ruins' },
  { value: 'swamp', label: 'swamp' },
  { value: 'underground', label: 'underground' },
  { value: 'urban', label: 'urban' },
]

const options5 = [
	{ value: 'any', label: 'any' },
  { value: 'aberration', label: 'aberration' },
  { value: 'beast', label: 'beast' },
  { value: 'celestial', label: 'celestial' },
  { value: 'construct', label: 'construct' },
  { value: 'dragon', label: 'dragon' },
  { value: 'elemental', label: 'elemental' },
  { value: 'fey', label: 'fey' },
  { value: 'fiend', label: 'fiend' },
  { value: 'giant', label: 'giant' },
  { value: 'humanoid', label: 'humanoid' },
  { value: 'monstrosity', label: 'monstrosity' },
  { value: 'ooze', label: 'ooze' },
  { value: 'plant', label: 'plant' },
  { value: 'undead', label: 'undead' },
]

const options6 = [
	{ value: 'any', label: 'any' },
  { value: '1/8', label: '1/8' },
  { value: '1/4', label: '1/4' },
  { value: '1/2', label: '1/2' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
  { value: '13', label: '13' },
  { value: '14', label: '14' },
  { value: '15', label: '15' },
  { value: '16', label: '16' },
  { value: '17', label: '17' },
  { value: '18', label: '18' },
  { value: '19', label: '19' },
  { value: '20', label: '20' },
  { value: '21', label: '21' },
  { value: '22', label: '22' },
  { value: '23', label: '23' },
  { value: '24', label: '24' },
  { value: '25', label: '25' },
  { value: '26', label: '26' },
  { value: '27', label: '27' },
  { value: '28', label: '28' },
  { value: '29', label: '29' },
  { value: '30', label: '30' },
]

class SearchInfo extends React.Component {
	constructor(){
		super();
		this.state = {
			selectedOption: '',
			selectedOption2: '',
			selectedOption3: '',
			selectedOption4: '',
			selectedOption5: '',
			selectedOption6: '',
			selectedOption7: '',
		};
	}

	componentDidMount(){}

	handleChange = (selectedOption) => {
  this.setState({ selectedOption }, () => {this.props.getNumMonsters(selectedOption.label)});
	}

	handleChange2 = (selectedOption2) => {
	  this.setState({ selectedOption2 }, () => {this.props.getEncounterDifficulty(selectedOption2.label)});
	  // console.log(`Option selected:`, selectedOption2);
	}

	handleChange3 = (selectedOption3) => {
	  this.setState({ selectedOption3 }, () => {this.props.getMonsterSize(selectedOption3.label)});
	  // console.log(`Option selected:`, selectedOption3);
	}

	handleChange4 = (selectedOption4) => {
	  this.setState({ selectedOption4 }, () => {this.props.getEnvironment(selectedOption4.label)});
	  // console.log(`Option selected:`, selectedOption4);
	}

	handleChange5 = (selectedOption5) => {
	  this.setState({ selectedOption5 }, ()=> {this.props.getMonsterType(selectedOption5.label)});
	  // console.log(`Option selected:`, selectedOption5);
	}

	handleChange6 = (selectedOption6) => {
	  this.setState({ selectedOption6 }, () => {this.props.getMinChallenge(selectedOption6.label)});
	  // console.log(`Option selected:`, selectedOption6);
	}

	handleChange7 = (selectedOption7) => {
	  this.setState({ selectedOption7 }, () => {this.props.maxChallenge(selectedOption7.label)});
	  // console.log(`Option selected:`, selectedOption7);
	}

	render() {
		console.log(this.props)
		return (
			<SearchDiv> 
				<h2>Filter Selection</h2>
				<FlexDiv>
					<div>
						<h3>Number Of Monsters</h3>
						<Select
							className="select"
			        value={this.selectedOption}
			        onChange={this.handleChange}
			        options={options}
			      />
		      </div>
		      <div>
		      	<h3>Encounter Difficulty</h3>
		      	<Select
		      		className="select"
			        value={this.selectedOption2}
			        onChange={this.handleChange2}
			        options={options2}
			      />
		      </div>
		      <div>
		      	<h3>Monster Size</h3>
		      	<Select
		      		className="select"
			        value={this.selectedOption3}
			        onChange={this.handleChange3}
			        options={options3}
			      />
		      </div>
		      <div>
		      	<h3>Environment</h3>
		      	<Select
		      		className="select"
			        value={this.selectedOption4}
			        onChange={this.handleChange4}
			        options={options4}
			      />
		      </div>
		      <div>
		      	<h3>Monster Type</h3>
		      	<Select
		      		className="select"
			        value={this.selectedOption5}
			        onChange={this.handleChange5}
			        options={options5}
			      />
		      </div>
		      <div>
		      	<h3>Min Challenge Rating</h3>
		      	<Select
		      		className="select"
			        value={this.selectedOption6}
			        onChange={this.handleChange6}
			        options={options6}
			      />
		      </div>
		      <div>
		      	<h3>Max Challenge Rating</h3>
		      	<Select
		      		className="select"
			        value={this.selectedOption7}
			        onChange={this.handleChange7}
			        options={options6}
			      />
		      </div>
		     </FlexDiv>
			</SearchDiv>
		)
	}
}

export default SearchInfo;