import React from 'react';
import axios from 'axios';
import {} from './encounters_css.js';
import './css/style.css'


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

  <div class="wrapper">
  <div class="card_1s">
			{this.state.monsters.map(m => {
					return  <div class=" card_1 [ is-collapsed ] ">
										<div class="card_1__inner [ js-expander ]">
											<img src={m.img_url} className="img-div" />
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
										<i class="fa fa-folder-o"></i>
										<div class="card_1__expander">
											<i class="fa fa-close [ js-collapser ]"></i>
											Expander
										</div>
									</div>
				})}
			</div>
		</div>
		</div>
		)
	}
}

export default Encounter;