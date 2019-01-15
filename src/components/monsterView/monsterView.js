import React, { Component } from "react";
import monsters from "../monsters.js";
import {FlexDiv} from '../styles/search_info_css.js'
import { FaAngleDown, FaAngleRight, FaAngleLeft, FaTimes } from "react-icons/fa";
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
class MonsterView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            monster: {},
            size: '',
            env: '',
            type: '',
            challenge: '',
            total: '',
            nameBut: false,
            typeBut: false,
            sizeBut: false,
            pageBut: false,
            expBut: false,
            crBut: false,
            totalDiv: null,
            monModal: false,
            statDiv: null,
            dmg: ""
        };
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    //input change handlers
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

    //generates list based on selected fields
    genMon = () => {
        let env = this.state.env.value;
        let size = this.state.size.value;
        let type = this.state.type.value;
        let cr = this.state.challenge.value;
        let ar = []
        let condition1, condition2, condition3, condition4
      
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
               totalDiv: true,
               statDiv: true,
               nameBut: true,
               typeBut: false,
               sizeBut: false,
               pageBut: false,
               expBut: false,
               crBut: false,
           })
        }
    }
    //clears list
    clear = () => {
        this.setState({
            monsters: [],
            monModal: null,
            totalDiv: null,
            statDiv: null
        });
    }

    //sorts list by field
    typeSort = () => {
        this.state.monsters.sort(function (a, b) {
            if (a.type < b.type) {
                return -1;
            }
            if (a.type > b.type) {
                return 1;
            }
        });
        this.setState({
            monsters: this.state.monsters,
            nameBut: false,
            typeBut: true,
            sizeBut: false,
            pageBut: false,
            expBut: false,
            crBut: false,
        })
    };
    nameSort = () => {
        this.state.monsters.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
        });
        this.setState({
            monsters: this.state.monsters,
            nameBut: true,
            typeBut: false,
            sizeBut: false,
            pageBut: false,
            expBut: false,
            crBut: false,
        })
    };

    sizeSort = () => {
        this.state.monsters.sort(function (a, b) {
            if (a.size > b.size) {
                return -1;
            }
            if (a.size < b.size) {
                return 1;
            }
        });
        this.setState({
            monsters: this.state.monsters,
            nameBut: false,
            typeBut: false,
            sizeBut: true,
            pageBut: false,
            expBut: false,
            crBut: false,
        })
    };
        
    xpSort = () => {
        this.state.monsters.sort(function (a, b) {
            if (a.xp < b.xp) {
                return -1;
            }
            if (a.xp > b.xp) {
                return 1;
            }
        });
        this.setState({
            monsters: this.state.monsters,
            nameBut: false,
            typeBut: false,
            sizeBut: false,
            pageBut: false,
            expBut: true,
            crBut: false,
        })
    };
        xpSort2 = () => {
        this.state.monsters.sort(function (a, b) {
            if (a.xp < b.xp) {
                return -1;
            }
            if (a.xp > b.xp) {
                return 1;
            }
        });
        this.setState({
            monsters: this.state.monsters,
            nameBut: false,
            typeBut: false,
            sizeBut: false,
            pageBut: false,
            expBut: false,
            crBut: true,
        })
    };
    pageSort = () => {
        this.state.monsters.sort(function (a, b) {
            return a.page - b.page;
        })
        this.setState({
            monsters: this.state.monsters,
            nameBut: false,
            typeBut: false,
            sizeBut: false,
            pageBut: true,
            expBut: false,
            crBut: false,
        })
    };


    onMonClick = name => {
        this.state.monsters.filter(monster => {
            if (monster.name === name) {
                this.setState({
                    monster: monster
                });
            }
        });
    };

    //fills stat to none if field does not exist
    statFill = (monster) => {
        let dmg = monster.damage_immune;
            if(!monster.hasOwnProperty('damage_immune')){
            document.getElementById(`${monster.name}3`).innerHTML = "(none)";
           } else if(monster.hasOwnProperty('damage_immune')){
         document.getElementById(`${monster.name}3`).innerHTML = dmg;
           }
    }
        statFill1 = (monster) => {
        let cnd = monster.condition_immune;
            if(!monster.hasOwnProperty('condition_immune')){
            document.getElementById(`${monster.name}5`).innerHTML = "(none)";
           } else if(monster.hasOwnProperty('condition_immune')){
         document.getElementById(`${monster.name}5`).innerHTML = cnd;
           }
    }
        statFill2 = (monster) => {
        let dmgres = monster.damage_resist;
            if(!monster.hasOwnProperty('damage_resist')){
            document.getElementById(`${monster.name}4`).innerHTML = "(none)";
           } else if(monster.hasOwnProperty('damage_resist')){
         document.getElementById(`${monster.name}4`).innerHTML = dmgres;
           }
    }
            statFill3 = (monster) => {
        let skill = monster.Skills;
            if(!monster.hasOwnProperty('Skills')){
            document.getElementById(`${monster.name}6`).innerHTML = "(none)";
           } else if(monster.hasOwnProperty('Skills')){
         document.getElementById(`${monster.name}6`).innerHTML = skill;
           }
    }

    //toggle hide and show monster stats when clicked
    toggleHide = name => {
       this.state.monsters.filter(monster => {
           if(monster.name === name){
               document.getElementById(`${monster.name}`).style.display = "none";
           }
       })
    }
    toggleShow = name => {
       this.state.monsters.filter(monster => {
           if(monster.name === name){
               document.getElementById(`${monster.name}`).style.display = "initial";
           }
       })
    }
    //toggles ability page
        abilHide = name => {
        this.state.monsters.filter(monster => {
           if(monster.name === name){
               document.getElementById(`${monster.name}1`).style.display = "none";
               document.getElementById(`${monster.name}2`).style.display = "flex";
           }
                  })
           }
       abilShow = name => {
                 this.state.monsters.filter(monster => {
           if(monster.name === name){
           document.getElementById(`${monster.name}2`).style.display = "none";
            document.getElementById(`${monster.name}1`).style.display = "flex";
           }
                 })
           }

      //capitalizes first letter from lowercase    
    capitalize = (str) => 
    str.charAt(0).toUpperCase() + str.slice(1);

    render(){
    let totalDiv = null;
    let statDiv = null;
    if (this.state.totalDiv === true) {
      totalDiv = (
        <div className="total-mon">
            <h1>Total:</h1><span>{this.state.total}</span>
        </div>
      )}
    if (this.state.statDiv === true) {
      statDiv = (
       <div className="mon-div-stats">
                    <p onClick={this.nameSort}>Name
                    <FaAngleDown
                    style={{ color: this.state.nameBut === true ? "rgb(255, 255, 255)" : "black" }}
                    className="arrowdown"
                  />
                    </p>
                    <p onClick={this.typeSort}>Type
                      <FaAngleDown
                    style={{ color: this.state.typeBut === true ? "rgb(255, 255, 255)" : "black" }}
                    className="arrowdown"
                  />
                    </p>
                    <p onClick={this.sizeSort}>Size
                      <FaAngleDown
                    style={{ color: this.state.sizeBut === true ? "rgb(255, 255, 255)" : "black" }}
                    className="arrowdown"
                  />
                    </p>
                    <p onClick={this.pageSort}>Page
                      <FaAngleDown
                    style={{ color: this.state.pageBut === true ? "rgb(255, 255, 255)" : "black" }}
                    className="arrowdown"
                  />
                    </p>
                    <p onClick={this.xpSort}>XP
                      <FaAngleDown
                    style={{ color: this.state.expBut === true ? "rgb(255, 255, 255)" : "black" }}
                    className="arrowdown"
                  />
                    </p>
                    <p className="cr" onClick={this.xpSort2}><span className="cr1">Challenge Rating</span><span className="cr2">CR</span>
                      <FaAngleDown
                    style={{ color: this.state.crBut === true ? "rgb(255, 255, 255)" : "black" }}
                    className="arrowdown"
                  />
                    </p>
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
                <button className="sort-button" onClick={this.genMon}>Find</button>
                <button className="sort-button" onClick={this.clear}>Clear</button>
                </div>
                {totalDiv}
                <div className="monster-div2">
                {statDiv}
                    {this.state.monsters.map((monster, name) =>(
                        <div className="card-contain"                        
                        key= {name}
                        id= {name}>
                        <div
                        onClick={() => {
                         this.toggleShow(monster.name);
                         this.statFill(monster);
                         this.statFill1(monster);
                         this.statFill2(monster);
                         this.statFill3(monster);
                         }}
                        data-aos="flip-down" 
                        className="monster-card2"
                        >
                      <div>
                        <img src={monster.img_url} className="monster-pic2" alt="monsterPic"></img>
                       </div>
                       <p className="monster-name">{monster.name}</p>
                       <p
                       style={{ color: 
                       monster.type === "aberration"  ? "teal" :
                       monster.type === "beast" ? "chocolate" :
                       monster.type === "celestial" ? "yellow" :
                       monster.type === "construct" ? "slategray" :
                       monster.type === "elemental" ? "magenta" :
                       monster.type === "fey" ? "lightyellow" :
                       monster.type === "fiend" ? "tomato" :
                       monster.type === "giant" ? "#F4A460" :
                       monster.type === "humanoid" ? "moccasin" :
                       monster.type === "monstrosity" ? "olive" :
                       monster.type === "ooze" ? "lime" :
                       monster.type === "undead" ? "powderblue" :
                       monster.type === "plant" ? "green" :
                       monster.type === "dragon" ? "gold" : "white"
                        }
                       }
                       >{this.capitalize(monster.type)}</p>
                       <p>{this.capitalize(monster.size)}</p>
                        <p>{monster.page}</p>
                        <p>{monster.xp}</p>
                        <p>{monster.challenge_rating}</p>
                        </div>
                        
                        
                        <div data-aos="flip-left" id={monster.name} className="toggle1">
                        <div className="abilities" id={(`${monster.name}1`)}>
                        <div 
                        id="abilities"
                        className="ability-div">
                             <div className="ability2">
                        <h1>Traits</h1>
                        <p className="stat-title1" dangerouslySetInnerHTML={{__html: monster.Traits}}/>
                        </div>
                        <div className="ability2">
                         <h1>Actions</h1>   
                        <p className="stat-title1" dangerouslySetInnerHTML={{__html: monster.Actions}}/>
                        </div>
                        <div className="ability2">
                        <h1>Lengendary Actions</h1>
                        <p className="stat-title1" dangerouslySetInnerHTML={{__html: monster.Legendary_actions}}/>
                        </div>
                        </div>
                         <div className="icons">
                             <FaTimes 
                        className="close"
                            onClick={() => {
                         this.toggleHide(monster.name);
                         this.abilHide(monster.name);
                        
                         }}
                        />
                        <FaAngleLeft 
                        className="arrowright"
                            onClick={() => {
                         this.abilHide(monster.name);
                         }}
                        />
                         <FaAngleRight 
                          className="arrowed"
                        />
                        </div>
                        </div>
                        <div className="monster-div1">
                        <div data-aos="flip-left" id={(`${monster.name}2`)}
                  
                         className="monster-card1">
                      <div>
                         <img src={monster.img_url} className="monster-pic1" alt="monsterPic"></img>
                       </div>

                        <div className="other-skills">
                         <div className="monster-title01">
                        <h2
                       style = {{ color: 
                       monster.type === "aberration"  ? "teal" :
                       monster.type === "beast" ? "chocolate" :
                       monster.type === "celestial" ? "yellow" :
                       monster.type === "construct" ? "slategray" :
                       monster.type === "elemental" ? "magenta" :
                       monster.type === "fey" ? "lightyellow" :
                       monster.type === "fiend" ? "tomato" :
                       monster.type === "giant" ? "#F4A460" :
                       monster.type === "humanoid" ? "moccasin" :
                       monster.type === "monstrosity" ? "olive" :
                       monster.type === "ooze" ? "lime" :
                       monster.type === "undead" ? "powderblue" :
                       monster.type === "plant" ? "green" :
                       monster.type === "dragon" ? "gold" : "white"
                        }
                       }
                        >{monster.name}</h2>
                        <p>{monster.type} | ({monster.size})</p>
                        </div>
                        <div className="skill-div">
                        <div className="skill-set">
                            <div className="skill">
                            <p className="skill-name">Skills</p>
                            <p id={`${monster.name}6`} className="skill-name1"/>
                            </div>
                               <div className="skill">
                            <p className="skill-name">Senses</p>
                            <p className="skill-name1">{monster.Senses}</p>
                            </div>
                         <div className="skill">
                            <p className="skill-name">Languages</p>
                            <p className="skill-name1">{monster.Languages}</p>
                            </div>
                        </div>
                           <div className="skill-set2">
                           <div className="skill">
                            <p className="skill-name">Page</p>
                            <p className="skill-name1">{monster.page}</p>
                            </div>
                                  <div className="skill">
                            <p className="skill-name">Challenge Rating</p>
                            <p className="skill-name1">{monster.challenge_rating}</p>
                            </div>
                                  <div className="skill">
                            <p className="skill-name">Exp Points</p>
                            <p className="skill-name1">{monster.xp}</p>
                            </div>
                        </div>
                        <div className="skill-set3">
                           <div className="skill">
                            <p className="skill-name">Dmg Immune</p>
                            <p id={`${monster.name}3`} className="skill-name1" />
                            </div>
                                  <div className="skill">
                            <p  className="skill-name">Dmg Resist</p>
                            <p id={`${monster.name}4`} className="skill-name1" />
                            </div>
                                  <div className="skill">
                            <p className="skill-name">Cond Immune</p>
                            <p id={`${monster.name}5`} className="skill-name1" />
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="monster-info1">
                        <div className="monster-info">
                        <div className="monster-stats">
                            <p className="stat-title1">AC</p>
                            <p className="stat">{monster.armorClass}</p>
                        </div>
                        <div className="monster-stats">
                            <p className="stat-title1">HP</p>
                            <p className="stat">{monster.hitPoints}</p>
                        </div>
                        <div className="monster-stats">
                            <p className="stat-title1">SPEED</p>
                            <p className="stat">{monster.Speed}</p>
                        </div>
                        </div>
                        <div className="monster-info">
                        <div className="monster-stats">
                            <p className="stat-title1">STR</p>
                            <p className="stat">{monster.STR} ({monster.STR_mod})</p>
                        </div>
                        <div className="monster-stats">
                            <p className="stat-title1">DEX</p>
                            <p className="stat">{monster.DEX} ({monster.DEX_mod})</p>
                        </div>
                        <div className="monster-stats">
                            <p className="stat-title1">CON</p>
                            <p className="stat">{monster.CON} ({monster.CON_mod})</p>
                        </div>
                        </div>
                        <div className="monster-info">
                        <div className="monster-stats">
                            <p className="stat-title1">INT</p>
                            <p className="stat">{monster.INT} ({monster.INT_mod})</p>
                        </div>
                        <div className="monster-stats">
                            <p className="stat-title1">WIS</p>
                            <p className="stat">{monster.WIS} ({monster.WIS_mod})</p>
                        </div>
                        <div className="monster-stats">
                            <p className="stat-title1">CHA</p>
                            <p className="stat">{monster.CHA} ({monster.CHA_mod})</p>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className="icons">
                                     <FaTimes 
                        className="close"
                            onClick={() => {
                         this.toggleHide(monster.name);
                          this.abilHide(monster.name);
                         }}
                        />
                                <FaAngleRight 
                                className="arrowright"
                            onClick={() => {
                         this.abilShow(monster.name);
                         }}
                        />
                                           <FaAngleRight 
                                className="arrowed"
                        />
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