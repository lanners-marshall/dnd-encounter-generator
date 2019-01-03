import React, { Component } from "react";
import monsters from "./monsters";
import "./monsterList.css";

class MonsterList extends Component{
    constructor(props){
        super(props);
        this.state = {
            monsters: []
        };
    }
    componentDidMount () {
        this.setState({monsters: monsters});
    }  
     filterChallenge = () => {
                let newArray = monsters.filter(monster =>
                    monster.Challenge > 20000);
                this.setState({
                     monsters: newArray
                });
            };
    clear =() =>{
        this.setState({
            monsters: monsters
        });
    }

    render(){
        return(
            <div>
            <div className="buttons">
            <button className="sort-button" onClick={this.filterChallenge}>Filter Test</button>
            <button className="sort-button" onClick={this.clear}>Clear</button>
            </div>
            <div className="monster-div">
                {this.state.monsters.map(monster =>(
                    <div className="monster-card">
                    <img src={monster.img_url} className="monster-pic" alt="monsterPic"></img>
                    <div className="monster-title">
                    <h1>{monster.name}</h1>
                    <p>{monster.meta}</p>
                    </div>
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
                    <div className="exp-div">
                    <h5>CHALLENGE RATING: <span className="monster-title2">{monster.Challenge} XP</span> </h5>
                    </div>
                    </div>
                ))}
            </div>
            </div>
        );
    }
}


export default MonsterList;