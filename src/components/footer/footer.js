import React, { Component } from 'react';
import "./footer.css"

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
        <div>
      © 2019 <a className="atag" href="/">DnD Encounter </a>
       | Site By <a className="atag" href="https://markstesney.netlify.com/">Sakkey</a><span> |</span><a className="atag" href="https://github.com/lanners-marshall">  Marshall Lanners</a><span> |</span><a className="atag" href="https://github.com/JHaydenDev"> Joseph Hayden</a>
      </div>
      </footer>
    );
  }
}

export default Footer;