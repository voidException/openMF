import React from 'react';
import NavLink from './NavLink';
import Swiper from './components/swiper';
import Navigator from './components/navigator';
import Bottom from './components/Bottom';
let width= document.documentElement.clientWidth;

export  default class App  extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={styles.wrapperStyle}>
                <Navigator />
                <div>
                    <Swiper />
                </div>
                <div>
                    <Bottom />
                </div>
            </div>
        );
    }
}


let styles = {
    wrapperStyle:{
        display: 'flex',
        flexDirection:'column',
        width: width,
    }
}



