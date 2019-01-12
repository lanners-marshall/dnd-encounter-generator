import React from 'react';
import { Route } from "react-router-dom";
import {Container} from './App_css.js'
import MonsterView from "./components/monsterView/monsterView.js"
import Footer from "./components/footer/footer.js";
import Nav from './components/nav/nav.js';
import GenGroup from "./components/genGroup/genGroup.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './components/styles/custom.css';


class App extends React.Component {
    componentDidMount(){
    AOS.init({
      duration : 800
    })
  }
  render() {
    return (
      <div>
        <Container>
        <Route path='/' component={Nav} />
         <Route exact path='/' component={GenGroup} />
         <Route exact path='/compendium' component={MonsterView} />
          </Container>
        <Route path='/' component={Footer} />
        </div>
    )
  }
}

export default App;