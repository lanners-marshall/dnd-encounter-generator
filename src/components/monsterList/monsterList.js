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
    componentDidMount () {}  

    logProps = () => {
        console.log(this.props)
    }

    clear = () => {
        this.setState({
            monsters: []
        })
    }

    getXpForFight = () => {
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

        let xp_allowed = this.getXpForFight()
        let env = this.props.environment
        let max = this.props.maxChallenge.value
        let min = this.props.minCr.value
        let max_string = this.props.maxChallenge.label
        let min_string = this.props.minCr.label
        let numMon = this.props.numberOfMonsters
        let size = this.props.size
        let type = this.props.type
        let ar = []

        let condition1, condition2, condition3, condition4, condition5

        for (let i in monsters){

            if (env === 'any'){
                condition1 = true
            } else {
                condition1 = monsters[i].environment.has(env)
            }

            if (size === 'any') {
                condition2 = true
            } else {
                condition2 = monsters[i].size === size
            }

            if (type === 'any') {
                condition3 = true
            } else {
                condition3 = monsters[i].type === type
            }

            if (max_string === 'any') {
                condition4 = true
            } else {
                condition4 = monsters[i].xp <= max
            }

            if (min_string === 'any') {
                condition5 = true
            } else {
                condition5 = monsters[i].xp >= min
            }

            if (condition1 && condition2 && condition3 && condition4 && condition5) {
                ar.push(monsters[i])
            }
        }


        let ar2 = []
        let monster

        console.log(ar)

        if (ar.length > 0) {
            while (true){
                if (xp_allowed <= 0) {
                    break;
                }
                monster = ar[Math.floor(Math.random() * ar.length)];
                ar2.push(monster)
                xp_allowed -= monster.xp

            }
        }

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
                            <h5>Experience Points <span className="monster-title2">{monster.xp} XP</span> </h5>
                        </div>
                        <div className="exp-div">
                            <h5>Challenge Raiting<span className="monster-title2"> {monster.challenge_rating}</span> </h5>
                        </div>
                        <div className="exp-div">
                            <h5>Page Number<span className="monster-title2"> {monster.page}</span> </h5>
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