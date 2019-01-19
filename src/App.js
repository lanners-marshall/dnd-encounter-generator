import React from 'react';
import { Route } from "react-router-dom";
import {Container} from './App_css.js';
import MonsterView from "./components/monsterView/monsterView.js";
import SignUp from "./components/authentication/SignUp";
import Footer from "./components/footer/footer.js";
import Nav from './components/nav/nav.js';
import GenGroup from "./components/genGroup/genGroup.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './components/styles/custom.css';


class App extends React.Component {
    componentDidMount(){
    window.scrollTo(0, 0);      
    AOS.init({
      duration : 800
    })
  }
  render() {
    return (
      <div>
        <Route exact path='/register' component={SignUp} />
        <Container>
          <Route exact path='/' component={Nav} />
          <Route exact path='/' component={GenGroup} />
          <Route exact path='/compendium' component={MonsterView} />
        </Container>
        <Route path='/' component={Footer} />
      </div>
    )
  }
}

export default App;