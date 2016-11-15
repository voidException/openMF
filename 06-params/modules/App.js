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
        this.state={
            userid:"",
            tag:1,
            denglu:'登录',
            dsp:'block',
            height:30,
            toggle:false
        }
    }

    componentDidMount() {
        //每隔一段时间检测本地是否登录了,如果登录了就替换掉登录
       // console.log(this.props)
        this.check=setInterval(() => {
            let userid= sessionStorage.getItem("userid");
            if (userid!=null){
                this.setState({
                    tag:2,
                    userid:userid
                });
                //clearInterval(this.check);
            }else{
                this.setState({
                    tag:1,
                    denglu:'登录'
                });
            }
        },100)


    }
    componentWillUnmount(){
        //clearInterval(this.timer);
        clearInterval(this.check);
        console.log('销毁check定时器');
    }
    imgClick(){
        this.setState({
            toggle:!this.state.toggle
        })
    }
    render() {

        return (
            <div style={styles.wrapperStyle} className="app">

                <div style={styles.divStyle} className="app">
                    <div style={styles.bees}>
                        <img style={{height:20,width:20,}} src="./modules/images/beens.png" />
                        <span>蜜蜂开放平台</span>
                    </div>
                    <div style={styles.middle}>
                        <div style={styles.head}>

                            <Link to="/headPage" style={styles.link} >首页</Link>
                        </div>
                        <div style={styles.head}>

                            <a href="http://localhost:8080/destination/serviceDetail_1.html" target="_blank" style={styles.link}> API</a>
                        </div>
                        <div style={styles.head}>

                            <Link to="/doc"  style={styles.link}>文档</Link>
                        </div>
                        <div style={styles.head}>

                            <Link to="/center"  style={styles.link}>商户中心</Link>
                        </div>
                    </div>
                    <div style={styles.login}>
                        <div style={styles.loginleft}>
                            <Link to="/login" style={styles.links}>
                                {this.state.tag==1?
                                    this.state.denglu
                                    :this.state.userid
                                }
                            </Link>
                           <img style={{height:20,width:25,cursor:'pointer'}} onClick={this.imgClick.bind(this)} src="./modules/images/arrow.png" />
                        </div>
                        {
                            this.state.toggle==true ? <div><Link to="/logout" style={styles.logout}>退出</Link></div>:null
                        }

                    </div>

                </div>
                {this.props.children}
                <div style={{marginTop:100}}>
                    <Bottom />
                </div>
            </div>
        )
    }

}


let styles = {
    wrapperStyle:{

        display: 'flex',
        flexDirection:'column',
        //width: width,
    },
    divStyle:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        color: '#fff',
       // width: width,
        height:46,
        paddingTop: '10px',
        paddingBottom:10,
        backgroundColor:'#373942',
    },
    bees:{
        flexDirection:'row',
        display:'flex',
        alignItems:'center'
    },
    head:{
        flexDirection:'row',
        display:'flex',
        marginRight:70
    },
    login:{
        position:'relative',
        flex:'display',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:100
    },
    loginleft:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    middle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    link:{
        height:25,
        color:'#fff',
        fontSize:16,
        textDecoration:'none',
    },
    links:{
        height:25,
        color:'#fff',
        fontSize:16,
        textDecoration:'none',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    logout:{
        textDecoration:'none',
        display:'black',
        paddingTop:10,
        position:'absolute',
        top:30,
        fontSize:14,
        backgroundColor:'#373942',
        color:'#fff',
        width:100,
        height:30,
        textAlign:'center'
    }
}



