/**
 * Created by mfhj-dz-001-424 on 16/10/18.
 */

import React from 'react';
import Swiper from './swiper';
import { Link } from 'react-router'
import NavLink from '../NavLink'
let width= document.documentElement.clientWidth;
export  default class Navigator  extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
               <div>
                    <div style={styles.divStyle}>
                        <div>首页</div>
                        <div>API</div>
                        <div>文档</div>
                        <div>商户中心</div>
                    </div>
               </div>
        );
    }
}


let styles = {
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



