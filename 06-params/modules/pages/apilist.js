/**
 * Created by mfhj-dz-001-424 on 16/10/18.
 * 这个是api的列表页面
 */


import React from 'react';


let width= document.documentElement.clientWidth;

export  default class APIList  extends React.Component{
    constructor(props){
        super(props);
        this.data=[];
        for(var i=0;i<20;i++){
            this.data.push(i);
        }
        this.state={
            apiList:[],
            apiListUli:this.data
        }
    }

    componentDidMount() {
        //获取json数据

    }


    render() {
        console.log(this.state.apiList.length)
        return (
            <div style={styles.contain}>

                <div style={styles.divTopStyle}>
                    <div>API>API列表</div>
                </div>
                <div style={styles.divDown}>
                    <div style={styles.divLeft}>
                        <p>所有类目</p>
                        <ul>
                         {
                            this.state.apiListUli.map((item)=> {
                               return(
                                   <li key={item}>
                                       {item}
                                       <button>delete</button>
                                   </li>
                               );
                            })
                         }
                        </ul>
                    </div>

                    <div style={styles.divRight}>
                         <h1>用户API</h1>
                         <span>提供了用户信息查询功能</span>
                        <table>
                            <thead>
                                <tr>
                                    <td>API列表</td>
                                    <td>类型</td>
                                    <td>描述</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>taobao.user.buyer.get</td>
                                    <td>收费</td>
                                    <td>查询买家信息API</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
    }
}


let styles = {
    contain:{
        display:'flex',
        flexDirection:'column'
    },
    divTopStyle:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        color: '#fff',
        width: width,
        height:46,
        paddingTop: '10px',
        paddingBottom:10,
        backgroundColor:'#0182C1'
    },
    divDown:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    divLeft:{
        marginLeft:50
    },
    divRight:{
        marginLeft:20
    },
    listStyle:{
        listStyleType :'none'
    }
}



