import React ,{Component}from 'react';
import NavLink from './NavLink';
import Swiper from './components/swiper';
import Bottom from './components/Bottom';
import { Link } from 'react-router'
let width= document.documentElement.clientWidth;
//  <div><Link to="/about/messages/:id">hello</Link></div>
export  default class App  extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={styles.wrapperStyle}>
                <div style={styles.divStyle}>
                    <div><Link to="/headPage">首页</Link></div>
                    <div><a href="./api.html" target="_blank"> API</a></div>
                    <div><Link to="/doc">文档</Link></div>
                    <div><Link to="/center">商户中心</Link></div>
                </div>
                {this.props.children}
                <div style={{marginTop:100}}>
                    <Bottom />
                </div>
            </div>
        );
    }
}


let styles = {
    wrapperStyle:{
        position:'relative',
        display: 'flex',
        flexDirection:'column',
        width: width,
    },
    divStyle:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        color: '#fff',
        width: width,
        height:46,
        paddingTop: '10px',
        paddingBottom:10,
        backgroundColor:'#373942',
    }
}



