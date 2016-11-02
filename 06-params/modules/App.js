import React ,{Component}from 'react';
import NavLink from './NavLink';
import Swiper from './components/swiper';
import Navigator from './components/navigator';
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
                    <div><Link to="/about">首页</Link></div>
                    <div><Link to="/repos">API</Link></div>

                    <div>文档</div>
                    <div>商户中心</div>
                </div>
                {this.props.children}
            </div>
        );
    }
}


let styles = {
    wrapperStyle:{
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
        backgroundColor:'#373942'

    }
}



