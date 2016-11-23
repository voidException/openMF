/**
 * Created by mfhj-dz-001-424 on 16/10/18.
 */
import React from 'react';

let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
let maxTime=60;
let initUrl="./modules/images/p1.jpg";
export  default class Swiper extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            url:initUrl,
            tag:1,
            time:maxTime
        };
    }
    circleClick(tag){
        let urlOne="./modules/images/p1.jpg";
        let urlTwo="./modules/images/p3.jpg";
        let urlThree="./modules/images/p4.jpg";

        if (tag==1){
            this.setState({
                url: urlOne,
            });
        }else if (tag==2){
            this.setState({
                url: urlTwo,
            });
        }else {
            this.setState({
                url: urlThree,
            });
        }
    }
    componentWillMount() {
        //console.log(this.props);
        //console.log(this.props.params.id);
        //console.log(this.props.location.query.bar);
    }

    componentDidMount() {
        //this.countDown();
        this.change();
    }


    componentWillUnmount(){
        //clearInterval(this.timer);
        clearInterval(this.swiper);
        //console.log('销毁this.swiper定时器');
    }
    change(){
        let tag=1;
        let totalCount=100000;
        let urlone="./modules/images/p1.jpg";
        let urlTwo="./modules/images/p3.jpg";
        let urlThree="./modules/images/p4.jpg";
        this.swiper=setInterval(() => {
            if (tag==1){
                this.setState({
                    url: urlTwo,
                });
                tag=2;
            }else if(tag==2){
                this.setState({
                    url:urlThree,
                });
                tag=3
            }else if(tag==3){
                this.setState({
                    url:urlone,
                });
                tag=1;
            }
            totalCount--;
            if(totalCount===0){
                clearInterval(this.swiper);
            }
        },4000)
    }
    render() {
        return (
            <div id="wrap"   style={styles.wrap} className="imgWrapper">
                <img  src={this.state.url} className="img"/>
               <div style={styles.circleWrapper}>
                   <div style={styles.circle}  onClick={this.circleClick.bind(this,1)}></div>
                   <div style={styles.circle}  onClick={this.circleClick.bind(this,2)}></div>
                   <div style={styles.circle}  onClick={this.circleClick.bind(this,3)}></div>
               </div>
            </div>
        );
    }
}

let styles = {
    wrap:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-end',
        marginTop:10,
        marginBottom:180
    },

    circle:{
        width:20,
        height:20,
        borderRadius:10,
        backgroundColor:'#43AC43',
        marginRight:5
    },
    circleWrapper:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        zIndex:10,
        marginTop:-30
    }
}



