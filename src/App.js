import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import {Container} from './App_css.js';
import MonsterView from "./components/monsterView/monsterView.js";
import Authentication from "./components/authentication/Authentication";
import Footer from "./components/footer/footer.js";
import Nav from './components/nav/nav.js';
import GenGroup from "./components/genGroup/genGroup.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './components/styles/custom.css';
import axios from 'axios';


class App extends React.Component {
    componentDidMount(){
    if (localStorage.getItem('token') == null){
      this.props.history.push('/register')
    }
    console.log(localStorage.getItem('token'));
    console.log(this.props)
    window.scrollTo(0, 0);      
    AOS.init({
      duration : 800
    })
  }
  render() {
    return (
      <div>
        <Container>
        <Route exact path='/register' component={Authentication} />
          <Route exact path='/' component={Nav} />
          <Route exact path='/' component={GenGroup} />
          <Route exact path='/compendium' component={MonsterView} />
        </Container>
      </div>
    )
  }
}

export default withRouter(App);