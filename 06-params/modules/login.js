
import React,{Component}from 'react'
import { browserHistory, Router, Route, Link, withRouter,PropTypes  } from 'react-router'
import UploadFile from './uploadFile';
import {Urllogin} from './url';
export default  class Login extends Component {
   // 构造
     constructor(props,context) {
       super(props,context);
       // 初始状态
       this.state = {};
     }

    componentDidMount() {
        //console.log(this.props)
    }
    handleSubmit(event) {
        event.preventDefault();
        const email = this.refs.email.value;
        const pass = this.refs.pass.value;
        let formData=new FormData();
        formData.append("userName",email);
        formData.append("password",pass);
        let option={
            url:Urllogin,
            body:formData
        };
        let response=UploadFile(option);
        response.then(resp=> {
           // console.log(resp);
            if(resp!==null){
                sessionStorage.setItem("userid",resp.apistoreUser.userId);
                sessionStorage.setItem("mobile",resp.apistoreUser.mobile);
                sessionStorage.setItem("email",resp.apistoreUser.email);

                const { location } = this.props
                if (location.state && location.state.nextPathname) {
                    this.context.router.push(location.state.nextPathname);
                    //this.context.router.push('/');
                } else {
                    this.context.router.push('/');
                    //this.props.history.pushState(null, '/'); //可用,但已经废弃了
                }
            }

        }).catch(err=>{
            console.log(err);
        });
    }
    render() {
        return(
            <div style={styles.container}>
                <form onSubmit={this.handleSubmit.bind(this)} >
                    <div style={styles.beefe}>
                        <img src="./modules/images/beefe.png" style={styles.beefeimg} />
                    </div>
                    <div style={{marginTop:20}}>
                        <div style={styles.label}>用户名</div>
                        <input ref="email" placeholder="请输入您的用户名" style={styles.account}/>
                    </div>
                    <div style={{marginTop:20}}>
                        <div style={styles.label}>密 码</div>
                        <input ref="pass" placeholder="请输入您的密码" style={styles.account}/>
                    </div>
                    <div style={styles.loginBottom}>
                         <button type="submit" style={styles.login}>登录</button>
                        <div style={styles.fr}>
                             <div style={{marginRight:5,cursor:'pointer',color:'#000',fontSize:14}}>忘记密码?</div>
                             <div style={{cursor:'pointer',color:'#000',fontSize:14}}>新用户注册</div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
Login.contextTypes = {
    router: React.PropTypes.object
}


let styles = {
    container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:400,
        width:400,
        marginTop:100,
        marginBottom:320,
        backgroundColor:'#FAFFBD',
    },
    beefe:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    beefeimg:{
        width:60,
        height:60
    },
    label:{
        marginBottom:10,
        fontSize:14
    },
    account:{
        height:25,
        width:300,
    },
    login:{
        width:60,
        height:25,
        borderRadius:3,
        backgroundColor:'#5091FF',
        color:'#fff'
    },
    loginBottom:{
        height:40,
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    fr:{
        display:'flex',
        flexDirection:'row'
    }

}
