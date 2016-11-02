/**
 * Created by mfhj-dz-001-424 on 16/11/1.
 */

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory,browserHistory,IndexRoute,Redirect } from 'react-router'
import App from './modules/App';
import About from './modules/About'
import Repos from './modules/Repos'
import Swiper from './modules/components/swiper';
import APIList from  './modules/pages/apilist';

let Door=App;
//let Door=Swiper;
//let  Door=APIList;

render((
    <Router history={hashHistory}>
        <Route path="/" component={Door}>
            <IndexRoute component={Swiper} />
            <Route path="repos" component={Repos}/>
            <Route path="hello" component={Swiper} />
            <Route path="about" component={About}>
                <Route path="/messages/:id" component={Swiper}/>
                <Redirect from="messages/:id" to="/messages/:id" />
            </Route>
        </Route>
    </Router>
), document.getElementById('app'))
