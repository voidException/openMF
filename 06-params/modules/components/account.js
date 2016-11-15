/**
 * Created by mfhj-dz-001-424 on 16/11/3.
 */

import React,{Component}from 'react'
import { Link } from 'react-router'

export default  class Account extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            userid:null,
            mobile:null,
            email:null
        };
      }

    componentDidMount() {
        console.log(sessionStorage.getItem("userid"));
        this.setState({
            userid:sessionStorage.getItem("userid"),
            mobile:sessionStorage.getItem("mobile"),
            email:sessionStorage.getItem("email")
        })
    }
    render() {
        return(
            <div style={styles.container}>
                <div style={styles.account}>我的账户</div>
                <div style={styles.commonWrap}>
                    <div style={styles.comL}>user_id</div>
                    <div style={{color:'#666666'}}>{this.state.userid}</div>
                </div>
                <div style={styles.commonWrap}>
                    <div style={styles.comL}>绑定手机号</div>
                    <div style={{color:'#666666'}}>{this.state.mobile}</div>
                </div>
                <div style={styles.commonWrap}>
                    <div style={styles.comL}>登录密码</div>
                    <div style={{color:'#666666'}}>********</div>
                </div>
                <div style={styles.commonWrap}>
                    <div style={styles.comL}>电子邮箱</div>
                    <div style={{color:'#666666'}}>{this.state.email}</div>
                </div>
            </div>
        );
    }
}

let styles = {
    container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start'
    },
    account:{
        display:'flex',
        flexDirection:'row',
        fontWeight:'bold',
        height:40,
        alignItems:'center',
        marginBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'#efefef',
        borderBottomStyle:'solid',
        paddingLeft:18,
        marginBottom:20
    },
    commonWrap:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        height:60,
        borderBottomWidth:0.5,
        borderBottomColor:'#efefef',
        borderBottomStyle:'solid',
        fontSize:12
    },
    comL:{
        marginLeft:30,
        width:200,
        color:'#666666'
    }
}
