import React, { Component } from "react";
import monsters from "../../monsters.js";
import "./monsterList.css";

class MonsterList extends Component{
    constructor(props){
        super(props);
        this.state = {
            monsters: []
        };
    }
    componentDidMount () {}  

    logProps = () => {
        console.log(this.props)
    }

    getXpForFight = () => {
        //gets us our xp total for allowed for the fight
        let players = this.props.players
        let difficulty = this.props.difficulty
        let num
        let xp_total = 0

        if (difficulty === 'easy'){
            num = 0
        } else if (difficulty === 'medium'){
            num = 1
        } else if (difficulty === 'hard'){
            num = 2
        } else if (difficulty === 'deadly'){
            num = 3
        }

        for (let i in players) {
            xp_total += players[i].xp_range[num]
        }
        return xp_total
    }

    generateEncounter = () => {

        let xp = this.getXpForFight()
        let dif = this.props.difficulty
        let env = this.props.environment
        let max = this.props.maxChallenge
        let min = this.props.minCr
        let numMon = this.props.numberOfMonsters
        let size = this.props.size
        let type = this.props.type
        let ar = []

        if (this.props.env === 'any'){
            for (let i in monsters){
                if (monsters[i].size === size && monsters[i].type === type){
                    ar.push(monsters[i])
                }
            }
        } else {
            for (let i in monsters){
                if (monsters[i].envirement.has(env) && monsters[i].size === size && monsters[i].type === type){
                    ar.push(monsters[i])
                }
            }
        }

        // var rand = myArray[Math.floor(Math.random() * myArray.length)];
        let num
        let ar2 = []

        if (ar.length > 0){
            while (xp > 0) {
                if (xp < 0) {
                    break;
                }
                let monster = ar[Math.floor(Math.random() * ar.length)];
                ar2.push(monster)
                xp -= monster.xp
            }
        }

/* 
    I need to loop through an array of objects
    I need to check each monster and find if it already exsists
    if that monster already exsists then I add a coutner to that monster object
    I then display that counter in the browser
*/

        const countMonster = function(monster, ar){
            let counter = 0
            for (let i in ar){
                if (monster === ar[i]){
                    counter += 1
                }
            }
            monster.count = counter
        }

        for (let i in ar2){
            countMonster(ar2[i], ar2)
        }

        let returnVal = [...new Set(ar2)]

        console.log(returnVal)

        this.setState({
            monsters: returnVal
        })
    }

    render(){
        return(
            <div>
                <div className="buttons">
                <button className="sort-button1" onClick={this.generateEncounter}>Generate</button>
                <button className="sort-button2" onClick={this.clear}>Clear</button>
                <button onClick={this.logProps}>log props</button>
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
                        <div className="exp-div1">
                        <div className="exp-div">
                            <h5>Experience Points: </h5> <span className="monster-title2">{monster.xp} XP</span>
                        </div>
                        <div className="exp-div">
                            <h5>Challenge Raiting:</h5><span className="monster-title2"> {monster.challenge_rating}</span> 
                        </div>
                        <div className="exp-div">
                            <h5>Page Number: </h5><span className="monster-title2">{monster.page}</span>
                        </div>
                        </div>
                        <div className="exp-div">
                            <h5><span className="count">X {monster.count}</span> </h5>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


export default MonsterList;