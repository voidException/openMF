import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Swiper from './modules/components/swiper';
let Door=App;
//let Door=Swiper;
render((
  <Router history={hashHistory}>
    <Route path="/" component={Door}>
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
