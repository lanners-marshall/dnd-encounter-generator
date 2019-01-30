import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import {Container} from './App_css.js';
import MonsterView from "./components/monsterView/monsterView.js";
import Authentication from "./components/authentication/Authentication";
import Footer from "./components/footer/footer.js";
import Nav from './components/nav/nav.js';
import GenGroup from "./components/genGroup/genGroup.js";
import Sessions from './components/sessions/Sessions.js';
import Session from './components/sessions/Session.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './components/styles/custom.css';
import axios from 'axios';


class App extends React.Component {
    componentDidMount(){
    if (localStorage.getItem('token') == null){
      this.props.history.push('/')
    }
    // console.log(localStorage.getItem('token'));
    // console.log(this.props)
    window.scrollTo(0, 0);      
    AOS.init({
      duration : 800
    })
  }
  render() {
    return (
      <div>
        <Container>
          <Route exact path='/' component={Authentication} />
          <Route path='/view' component={Nav} />
          <Route exact path='/view/sessions' component={Sessions} />
          <Route exact path='/view/sessions/:id' component={Session} />
        </Container>
      </div>
    )
  }
}

export default withRouter(App);

// <Route exact path='/compendium' component={MonsterView} />