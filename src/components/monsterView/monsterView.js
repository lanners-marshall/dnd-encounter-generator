import React, { Component } from "react";
import monsters from "../monsters.js";
import {FlexDiv} from '../styles/search_info_css.js'
import Select from 'react-select';
import "./monsterView.css";

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
class MonsterView extends Component{
    constructor(props){
        super(props);
        this.state = {
            monsters: [],
			size: '',
			env: '',
			type: '',
			challenge: '',
            total: '',
            totalDiv: null
        };
    }

	handleChange3 = (size) => {
	  this.setState({ size });
	}
	handleChange4 = (env) => {
	  this.setState({ env });
	}
	handleChange5 = (type) => {
	  this.setState({ type });
	}
	handleChange6 = (challenge) => {
	  this.setState({ challenge });
	}

    genMon = () => {
        let env = this.state.env.value;
        let size = this.state.size.value;
        let type = this.state.type.value;
        let cr = this.state.challenge.value;
        let ar = []

        let condition1, condition2, condition3, condition4
        console.log("vars",env,size,type,cr)
        for (let i in monsters){
            if (env === 'any' || env === undefined){
                condition1 = true
            } else {
                condition1 = monsters[i].environment.has(env)
            }

            if (size === 'any' || size === undefined) {
                condition2 = true
            } else {
                condition2 = monsters[i].size === size
            }

            if (cr === 'any' || cr === undefined) {
                condition3 = true
            } else {
                condition3 = monsters[i].xp === cr
            }

            if (type === 'any' || type === undefined) {
                condition4 = true
            } else {
                condition4 = monsters[i].type === type
            }

            if (condition1 && condition2 && condition3 && condition4) {
                ar.push(monsters[i])
            }
           this.setState({
               monsters: ar,
               total: ar.length,
               totalDiv: true
           })
        }
    }
    clear = () =>{
        this.setState({
            monsters: [],
        });
    }

    render(){
    let totalDiv = null;
    if (this.state.totalDiv === true) {
      totalDiv = (
        <div className="total-mon">
            <h1>Total:</h1><span>{this.state.total}</span>
        </div>
      )}
        return(
            <div className="monview">
            			<div className="select-mon"> 
				<FlexDiv>
		      <div>
		      	<h3>Monster Size</h3>
		      	<Select
		      		className="select"
			        value={this.size}
			        onChange={this.handleChange3}
			        options={options3}
			      />
		      </div>
		      <div>
		      	<h3>Environment</h3>
		      	<Select
		      		className="select"
			        value={this.env}
			        onChange={this.handleChange4}
			        options={options4}
			      />
		      </div>
		      <div>
		      	<h3>Monster Type</h3>
		      	<Select
		      		className="select"
			        value={this.type}
			        onChange={this.handleChange5}
			        options={options5}
			      />
		      </div>
		      <div>
		      	<h3>Challenge Rating</h3>
		      	<Select
		      		className="select"
			        value={this.challenge}
			        onChange={this.handleChange6}
			        options={options6}
			      />
		      </div>
		     </FlexDiv>
			</div>
                <div className="buttons">
                <button className="sort-button" onClick={this.genMon}>Generate</button>
                <button className="sort-button" onClick={this.clear}>Clear</button>
                </div>
                {totalDiv}
                <div className="monster-div1">
                    {this.state.monsters.map(monster =>(
                        <div data-aos="flip-down" className="monster-card1">
                      <div>
                        <img src={monster.img_url} className="monster-pic1" alt="monsterPic"></img>
                       </div>
                        <div className="exp-div5">
                        <div className="monster-title01">
                        <h1>{monster.name}</h1>
                        <h5>({monster.size}) {monster.type}</h5>
                        </div>
                        <div className="exp-div6">
                            <h5>Page Number </h5><span className="monster-title2"> {monster.page}</span>
                        </div>
                        <div className="exp-div6">
                            <h5>Challenge Raiting </h5><span className="monster-title2"> {monster.challenge_rating}</span>
                        </div>
                        <div className="exp-div6">
                            <h5>Exp Points  </h5><span className="monster-title2">{monster.xp} XP</span>
                        </div>
                        </div>
                        <div className="monster-info1">
                        <div className="monster-info">
                        <div className="monster-stats">
                            <p className="stat-title">ARMOR CLASS</p>
                            <p className="stat">{monster.armorClass}</p>
                        </div>
                        <div className="monster-stats">
                            <p className="stat-title">HIT POINTS</p>
                            <p className="stat">{monster.hitPoints}</p>
                        </div>
                        <div className="monster-stats">
                            <p className="stat-title">SPEED</p>
                            <p className="stat">{monster.Speed}</p>
                        </div>
                        </div>
                        <div className="monster-info">
                        <div className="monster-stats">
                            <p className="stat-title">STR</p>
                            <p className="stat">{monster.STR} ({monster.STR_mod})</p>
                        </div>
                        <div className="monster-stats">
                            <p className="stat-title">DEX</p>
                            <p className="stat">{monster.DEX} ({monster.DEX_mod})</p>
                        </div>
                        <div className="monster-stats">
                            <p className="stat-title">CON</p>
                            <p className="stat">{monster.CON} ({monster.CON_mod})</p>
                        </div>
                        </div>
                        <div className="monster-info">
                        <div className="monster-stats">
                            <p className="stat-title">INT</p>
                            <p className="stat">{monster.INT} ({monster.INT_mod})</p>
                        </div>
                        <div className="monster-stats">
                            <p className="stat-title">WIS</p>
                            <p className="stat">{monster.WIS} ({monster.WIS_mod})</p>
                        </div>
                        <div className="monster-stats">
                            <p className="stat-title">CHA</p>
                            <p className="stat">{monster.CHA} ({monster.CHA_mod})</p>
                        </div>
                        </div>
                        
                        </div>

                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


export default MonsterView;