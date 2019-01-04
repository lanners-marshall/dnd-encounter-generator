import React from 'react';
import {XpDiv} from './styles/xpDisplay_css.js'


class XpDisplay extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){}

	logProps = () => {
		console.log(this.props)
	}

	render() {
		let players = this.props.players
		let ar = []
		console.log(players)
		let easy = 0
		let mid = 0
		let hard = 0
		let deadly = 0

		for (let i in players){
			easy += players[i].xp_range[0]
			mid += players[i].xp_range[1]
			hard += players[i].xp_range[2]
			deadly += players[i].xp_range[3]
		}

		return (
			<XpDiv>
				<h2>XP</h2>
				<p>Easy: {easy}</p>
				<p>Medium: {mid}</p>
				<p>Hard: {hard}</p>
				<p>Deadly: {deadly}</p>
			</XpDiv>
		)
	}
}

export default XpDisplay;
