import React from 'react';
import { Link } from "react-router-dom";
import './nav.css';
import dnd from '../../components/images/dnd.png';



class Nav extends React.Component {

  render() {
    return (
        <div className="nav-container">
        <Link to="/"><div className="nav-title">
          <img src={dnd} alt="dungeons and dragons" className="dnd" />
          <span>5e Encounter Generator</span>
          </div></Link>
            <div className="nav-list">
              <Link to="/compendium"><p>Compendium</p></Link>
            </div>
          </div>
    )
  }
}

export default Nav;