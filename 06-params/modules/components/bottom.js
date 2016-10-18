/**
 * Created by mfhj-dz-001-424 on 16/10/18.
 */
import React from 'react';

let width= document.documentElement.clientWidth;
let height=document.documentElement.clientHeight;
export  default class Bottom extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={styles.contain}>
                 <div style={styles.containUp}>
                    <div>合作伙伴:蛛网风控</div>
                    <div>联系我们:400-8604-001</div>
                    <div>QQ交流群:992500110</div>
                </div>
                <div  style={styles.containDown}>
                    <p style={{fontSize:14}}>
                      Copyright © 2015-2016 北京蜜蜂汇金科技有限公司 京ICP备14022439号-1 京ICP证151113号 京公网安备11010802015816号
                    </p>
                </div>
            </div>
        );
    }
}


let styles = {
    contain:{
        position:'absolute',
        bottom:10,
        left:10,
        display:'flex',
        flexDirection:'column',
        alignItem:'center',
        justifyContent:'center',
        width: width,
        height:100,
        backgroundColor:'#373942'
    },
    containUp:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItem:'center',
        width: width,
        color:'#fff'
    },
    containDown:{
        display:'flex',
        alignItem:'center',
        justifyContent:'center',
        color:'#fff'
    }

}
