/**
 * Created by mfhj-dz-001-424 on 16/10/18.
 */
import React from 'react';

let width= document.documentElement.clientWidth;
let height=document.documentElement.clientHeight;
export  default class Swiper extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <img style={styles.divStyle}  src="./modules/images/swiper1.png" />
                </div>
            </div>
        );
    }
}


let styles = {
    divStyle:{
        width: width,
        height:0.6*height,
    }
}



