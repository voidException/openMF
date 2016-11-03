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

    componentWillMount() {
        //console.log(this.props);
        //console.log(this.props.params.id);
        //console.log(this.props.location.query.bar);
    }

    componentDidMount() {
        //this.countDown();
        this.change();
    }

    //countDown() {
    //    let time = maxTime;
    //    this.timer = setInterval(() => {
    //        this.setState({time: --time});
    //        if (time === 0) {
    //            clearInterval(this.timer);
    //            //this.setState({controlVerifyCode:true});
    //            console.log('end time count')
    //        }
    //    }, 1000);
    //}

    componentWillUnmount(){
        //clearInterval(this.timer);
        clearInterval(this.swiper);
        console.log('销毁this.swiper定时器');
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
            <div id="wrap"   style={styles.wrap}>
                <img style={styles.image} src={this.state.url}/>
            </div>
        );
    }
}

let styles = {
    wrap:{
        width:width,
        height:height-300,
    },
    image:{
        width:width,
        height:600
    }
}



