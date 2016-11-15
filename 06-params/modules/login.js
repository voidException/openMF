
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
            console.log(resp);
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
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div style={styles.useraccount}>
                        <label style={styles.lapwdbel}>用户名:</label>
                        <input ref="email" placeholder="请输入您的用户名" style={styles.account}/>
                    </div>
                    <div>
                        <label style={{fontWeight:'bold',paddingRight:3}}>密&nbsp;&nbsp; 码:</label>
                        <input ref="pass" placeholder="请输入您的密码" style={styles.account}/>
                    </div>
                    <button type="submit" style={styles.login}>登录</button>
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
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:600
    },
    useraccount:{
        display:'flex',
        flexDirection:'row',
        fontWeight:'bold',
        height:40,
        width:400,
        alignItems:'center',
    },
    account:{
        height:30,
        width:300
    },
    //label:{
    //    height:30,
    //    display:'flex',
    //    flexDirection:'row',
    //    alignItems:'center',
    //    justifyContent:'center',
    //    border:'1px solid black',
    //
    //},
    login:{
        width:360,
        height:40,
        marginTop:20
    }
}
