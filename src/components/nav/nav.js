import React from 'react';
import { Link } from "react-router-dom";
// import './css/main.css';
import './nav.css';
import dnd from '../../components/images/dnd.png';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="nav-container">
        <div className="nav-title">
          <img src={dnd} alt="dungeons and dragons" className="dnd-img" />
          <Link to="/view/sessions"><span>Game Sessions List</span></Link>
        </div>
        <div className="nav-list">
          <p onClick={() => {localStorage.clear(); this.props.history.push('/')}}>Log Out</p>
        </div>
      </div>
    )
  }
}

export default Nav;


      // <div className="nav-container">
      //   <div className="nav-title">
      //     <img src={dnd} alt="dungeons and dragons" className="dnd-img" />
      //     <Link to="/view/sessions"><span>Game Sessions List</span></Link>
      //   </div>
      //   <div className="nav-list">
      //     <p onClick={() => {localStorage.clear(); this.props.history.push('/')}}>Log Out</p>
      //   </div>
      // </div>



