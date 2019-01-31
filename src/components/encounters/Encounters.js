import React from 'react';
import axios from 'axios';
import {} from './encounters_css.js';


class Encounter extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			monsters: []
		};
	}

	componentDidMount(){
		let url = window.location.href
	  let id = url.substring(url.lastIndexOf('/') + 1);
		axios.get(`https://dnd-backend.herokuapp.com/encounters/${id}`)
		.then(response => {
			this.setState({
				monsters: response.data,
			})
		})
		.catch(error => {
			console.log(error);
		})
	}

	render() {
		return (
			<div>
				{this.state.monsters.map(m => {
					return <div>
						<img src={m.img_url} />
						<p>{m.name}</p>
						<p>{m.type}</p>
						<p>{m.size}</p>
						<p>{m.count}</p>
						<p>{m.armorClass}</p>
						<p>{m.hitPoints}</p>
						<p>{m.Speed}</p>
						<p>{m.STR}: ({m.STR_mod})</p>
						<p>{m.DEX}: ({m.DEX_mod})</p>
						<p>{m.CON}: ({m.CON_mod})}</p>
						<p>{m.INT}: ({m.INT_mod})</p>
						<p>{m.WIS}: ({m.WIS_mod})</p>
						<p>{m.WIS}: ({m.WIS_mod})</p>
						<p>{m.CHA} ({m.CHA_mod})</p>
						<p>{m.xp}</p>
						<p>{m.challenge_rating}</p>
						<p>{m.page}</p>
					</div>
				})}
			</div>
		)
	}
}

export default Encounter;
