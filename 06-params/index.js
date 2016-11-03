/**
 * Created by mfhj-dz-001-424 on 16/11/1.
 */

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory,browserHistory,IndexRoute,Redirect } from 'react-router'
import App from './modules/App';
import Doc from './modules/Doc'
import Center from './modules/Center'
import Swiper from './modules/components/swiper';
import Account from  './modules/components/account';
import Application from  './modules/components/application';
import Service from  './modules/components/service';
let Door=App;
//let Door=Swiper;
//let  Door=APIList;

render((
    <Router history={hashHistory}>
        <Route path="/" component={Door}>
            <IndexRoute component={Swiper} />
            <Route path="headPage" component={Swiper} />
            <Route path="doc" component={Doc} />
            <Route path="center" component={Center}>
                <IndexRoute component={Account} />
                <Route path="account" component={Account}/>
                <Route path="application" component={Application}/>
                <Route path="service" component={Service}/>
            </Route>
        </Route>
    </Router>
), document.getElementById('app'))
