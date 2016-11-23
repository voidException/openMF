import React,{Component} from 'react'
import { Link } from 'react-router'
let width= document.documentElement.clientWidth;
export default  class Center extends Component{

  render() {
    return (
        <div style={styles.container} className="center">
          <div style={styles.left} className="centerLeft">
              <div style={styles.accountWrap}>
                <img style={{height:25,width:25,marginRight:10}} src="./modules/images/account.png" />
                <Link style={styles.linkBigTop} to="/center/account">账户管理</Link>
              </div>
              <div style={{paddingLeft:30,marginTop:8}}>
                <div><Link style={styles.link} to="/center/account">我的账户</Link></div>
                <div style={{marginTop:20}}><Link style={styles.link} to="/center/info">企业信息</Link></div>
              </div>

              <div  style={styles.commonWrap}>
                <img style={{height:25,width:25,marginRight:20}} src="./modules/images/account.png" />
                <Link style={styles.linkBig} to="/center/application">应用管理</Link>
              </div>
              <div style={{paddingLeft:30,marginTop:8}}>
                <Link style={styles.link} to="/center/application">我的应用</Link>
              </div>
              <div  style={styles.commonWrap}>
                <img style={{height:25,width:25,marginRight:20}} src="./modules/images/account.png" />
                <Link style={styles.linkBig} to="/center/service">服务管理</Link>
              </div>
              <div style={{paddingLeft:30,marginTop:8}}>
                <Link style={styles.link} to="/center/service">我的服务</Link>
              </div>
          </div>
          <div style={styles.right}>{this.props.children}</div>
        </div>
    );
  }
}

let styles={
  container:{
    marginTop:30,
    backgroundColor:'#F5F7FA',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:480
  },
  linkBigTop:{
    color:'#ffffff',
    fontSize:16,
    textDecoration:'none'
  },
  linkBig:{
    color:'#000',
    fontSize:16,
    textDecoration:'none'
  },
  link:{
    color:'#66666F',
    fontSize:12,
    textDecoration:'none',
    marginTop:19
  },
  left:{
    width:160,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'#EAEEF3',
    //height:600,
    //marginBottom:300
  },
  accountWrap:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
    backgroundColor:'#40C9B3',
    width:160,
    justifyContent:'center',
    height:40,
    fontSize:'bold'
  },
  commonWrap:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
    width:180,
    justifyContent:'center',
    height:40,
    fontSize:'bold'
  },
  right:{
    marginLeft:30,
    width:800,
    backgroundColor:'#fff'
  }
};