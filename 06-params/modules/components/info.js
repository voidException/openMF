/**
 * Created by mfhj-dz-001-424 on 16/11/3.
 */

import React,{Component}from 'react'
import { Link } from 'react-router'
import UploadFile from '../uploadFile';
import {UrlInfo} from '../url';
export default  class Info extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            creatorName:null, //创建人
            description:null,
            mail:null,
            phone:null,
            name:null, //商户名称
            updateTime:null
        };
      }

    componentDidMount() {
        let userid=sessionStorage.getItem("userid");
        let formData=new FormData();
        formData.append("userid",userid);
        let option={
            url:UrlInfo,
            body:formData
        };
        let response=UploadFile(option);
        response.then(resp=> {
            console.log(resp);
            if(resp!==null){
                this.setState({
                    creatorName:resp.creator,
                    description:resp.description,
                    mail:resp.mail,
                    name:resp.name,
                    updateTime:resp.updateTime,
                    phone:resp.phone
                });
            }
        }).catch(err=>{
            console.log(err);
        });
    }

    render() {
        return(
            <div style={styles.container}>
                <div style={styles.account}>企业信息</div>
                <div style={styles.commonWrap}>
                    <div style={styles.comL}>商户姓名</div>
                    <div style={{color:'#666666'}}>{this.state.name}</div>
                </div>
                <div style={styles.commonWrap}>
                    <div style={styles.comL}>商户描述</div>
                    <div style={{color:'#666666'}}>{this.state.description}</div>
                </div>
                <div style={styles.commonWrap}>
                    <div style={styles.comL}>邮箱</div>
                    <div style={{color:'#666666'}}>{this.state.mail}</div>
                </div>
                <div style={styles.commonWrap}>
                    <div style={styles.comL}>手机号</div>
                    <div style={{color:'#666666'}}>{this.state.phone}</div>
                </div>
                <div style={styles.commonWrap}>
                    <div style={styles.comL}>创建人</div>
                    <div style={{color:'#666666'}}>{this.state.creatorName}</div>
                </div>
                <div style={styles.commonWrap}>
                    <div style={styles.comL}>更新时间</div>
                    <div style={{color:'#666666'}}>{this.state.updateTime}</div>
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
