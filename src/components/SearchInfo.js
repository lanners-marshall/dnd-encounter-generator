import React from 'react';
import {SearchDiv, FlexDiv} from './styles/search_info_css.js'
import Select from 'react-select';
import './styles/custom.css'

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
  { value: 'coast', label: 'coast' },
  { value: 'desert', label: 'desert' },
  { value: 'forest', label: 'forest' },
  { value: 'hill', label: 'hill' },
  { value: 'mountain', label: 'mountain' },
  { value: 'grass land', label: 'grass land' },
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
  { value: 25, label: '1/8' },
  { value: 50, label: '1/4' },
  { value: 100, label: '1/2' },
  { value: 200, label: '1' },
  { value: 450, label: '2' },
  { value: 700, label: '3' },
  { value: 1100, label: '4' },
  { value: 1800, label: '5' },
  { value: 2300, label: '6' },
  { value: 2900, label: '7' },
  { value: 3900, label: '8' },
  { value: 5000, label: '9' },
  { value: 5900, label: '10' },
  { value: 7200, label: '11' },
  { value: 8400, label: '12' },
  { value: 10000, label: '13' },
  { value: 11500, label: '14' },
  { value: 13000, label: '15' },
  { value: 15000, label: '16' },
  { value: 18000, label: '17' },
  { value: 20000, label: '18' },
  { value: 22000, label: '19' },
  { value: 25000, label: '20' },
  { value: 33000, label: '21' },
  { value: 41000, label: '22' },
  { value: 50000, label: '23' },
  { value: 62000, label: '24' },
  { value: 75000, label: '25' },
  { value: 90000, label: '26' },
  { value: 105000, label: '27' },
  { value: 120000, label: '28' },
  { value: 135000, label: '29' },
  { value: 155000, label: '30' },
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
	  this.setState({ selectedOption6 }, () => {this.props.getMinChallenge(selectedOption6)});
	  // console.log(`Option selected:`, selectedOption6);
	}

	handleChange7 = (selectedOption7) => {
	  this.setState({ selectedOption7 }, () => {this.props.maxChallenge(selectedOption7)});
	  // console.log(`Option selected:`, selectedOption7);
	}

	render() {
		console.log(this.props)
		return (
			<SearchDiv> 
				<h2>Filter Selection</h2>
				<FlexDiv>
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