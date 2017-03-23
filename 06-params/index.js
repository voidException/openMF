/**
 * Created by mfhj-dz-001-424 on 16/11/1.
 */

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory,browserHistory,IndexRoute,Redirect } from 'react-router'
import App from './modules/App';
import Doc from './modules/Doc';
import API from './modules/API'
import Center from './modules/Center'
import Swiper from './modules/components/swiper';
import Account from  './modules/components/account';
import Info from  './modules/components/info';
import Application from  './modules/components/application';
import Service from  './modules/components/service';
import Login from  './modules/Login';
let Door=App;
//let Door=Swiper;
//let  Door=APIList;
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import * as reducers from './modules/reducers/index';
import configureStore from './modules/store/configureStore';

function requireAuth(nextState, replaceState) {
    //真尼玛就是个坑货
    if (sessionStorage.getItem("userid")==null) {
        replaceState({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })

    }
}
function enterFilter(nextState, replaceState){
    if (sessionStorage.getItem("userid")!==null) {
        replaceState({
            pathname: '/center',
            state: { nextPathname: nextState.location.pathname }
        })

    }
}
function logout(){
    sessionStorage.clear()
}
const store =configureStore();
render((
        <Provider  store={store}>
            <div>
                <Router history={hashHistory}>
                    <Route path="/" component={Door}  >
                        <IndexRoute component={Swiper} />
                        <Route path="headPage" component={Swiper} />
                        <Route path="logout" component={Swiper} onEnter={logout} />
                        <Route path="doc" component={Doc} />
                        <Route path="api" component={API} />
                        <Route path="center" component={Center}  onEnter={requireAuth}>
                            <IndexRoute component={Account} />
                            <Route path="account" component={Account}/>
                            <Route path="info" component={Info}/>
                            <Route path="application" component={Application}/>
                            <Route path="service" component={Service}/>
                        </Route>
                        <Route path="login" component={Login} onEnter={enterFilter} />
                    </Route>
                </Router>
            </div>
        </Provider>
), document.getElementById('app'))
