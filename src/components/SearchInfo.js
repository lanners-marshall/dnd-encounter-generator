import React from 'react';
import {SearchDiv} from './styles/search_info_css.js'
import Select from 'react-select';

const options = [
  { value: 'environment1', label: '1' },
  { value: 'environment2', label: '2' },
  { value: 'environment3', label: '3' },
];


class SearchInfo extends React.Component {
	constructor(){
		super();
		this.state = {
			selectedOption: ''
		};
	}

	componentDidMount(){}

	handleChange = (selectedOption) => {
	  this.setState({ selectedOption });
	  console.log(`Option selected:`, selectedOption);
	}


	render() {
		return (
			<SearchDiv> 
				<h2>Filter Selection</h2>
				<div>
					<h3>number of monsters</h3>
					<Select
		        value={this.selectedOption}
		        onChange={this.handleChange}
		        options={options}
		      />
	      </div>
			</SearchDiv>
		)
	}
}

export default SearchInfo;

	// extra in case you need to reference

	// handleChange = event => {
 	//    this.setState({[event.target.name]: event.target.value})
 	//  }

	//  <form>
	// 	<input
	// 		type="text"
	// 		placeholder='example'
	// 		onChange={this.handleChange}
	// 		name="example"
	// 		value={this.state.example}
	// 	/>
	// </form>
