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
            this.data.push('用aaa户API');
        }
        this.state={
            apiContent:[],
            apiListName:this.data
        }
    }

    componentDidMount() {
        //获取json数据
        let apidata=[];
        for (var i = 10; i >= 0; i--) {
            apidata.push({
                apiname:'taobao.user.buyer.get',
                apiType:'收费',
                apiDesp:'查询买家信息API'
            });
        }

        this.setState({
            apiContent:apidata
        })

    }
    onMouseOver(e){
        console.log(e.target);
        console.log(e.target.id);
        //e.style.backgroundColor="red";
        //let element=document.getElementById(e.target.id);
        //console.log(element)
        //element.style.backgroundColor="red";
    }

    onMouseOut(e){
       // let element=document.getElementById(e.target.id);
        //console.log(element)
        //element.style.backgroundColor="white";
    }
    render() {
       
        return (
            <div style={styles.contain}>

                <div style={styles.divTopStyle}>
                    <div>API>API列表</div>
                </div>
                <div style={styles.divDown}>
                    <div style={styles.divLeft}>
                        <div style={styles.alltitle}>
                            所有类目
                        </div>
                        <ul style={styles.listStyle}>
                         {
                            this.state.apiListName.map((item,i)=> {
                               return(
                                   <li key={i}  id={i} style={styles.ulli}  onMouseOver={this.onMouseOver.bind(this)}  onMouseOut={this.onMouseOut.bind(this)}>
                                       {item}
                                   </li>
                               );
                            })
                         }
                        </ul>
                    </div>

                    <div style={styles.divRight}>
                         <h1>用户API</h1>
                         <div>提供了评价的添加和查询功能。拥有如下API调用权限的应用，严禁涉及好评有礼/返现/免单等诱导消费者违背客观真实原则进行评价的场景，一经发现，收回权限</div>
                        <table style={{borderCollapse:'collapse'}}>
                            <thead>
                                <tr  style={{border:'1px solid black',backgroundColor:'red'}}>
                                    <td style={styles.lefttd}>API列表</td>
                                    <td style={styles.middletd}>类型</td>
                                    <td style={styles.righttd}>描述</td>
                                </tr>
                            </thead>
                            <tbody>
 
                                {
                                   this.state.apiContent.map((item,i)=> {
                                       return(
                                        <tr  style={{border:'1px solid black'}}  key={i} id={i+100}  onMouseOver={this.onMouseOver.bind(this)}  onMouseOut={this.onMouseOut.bind(this)}>
                                            <td  style={styles.lefttd}>{item.apiname}</td>
                                            <td  style={styles.middletd}>{item.apiType}</td>
                                            <td  style={styles.righttd}>{item.apiDesp}</td>
                                         </tr>
                                       );
                                    })
                               }
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
        paddingLeft:50,
        fontSize:14,
        backgroundColor:'#0182C1'
    },
    divDown:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    divLeft:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:100,
        backgroundColor:'#F5F5F5',
        marginTop:50,
        width:200

    },
    alltitle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        fontSize:20,
        borderBottom:'1px solid red',      
        height:40,
        width:200
    },
    divRight:{
        marginLeft:20,
        marginTop:20
    },
    listStyle:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        paddingLeft:0
    },
    ulli:{
         display:'flex',
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'flex-start',
         listStyleType :'none',
          height:40,
          width:200,
          paddingLeft:4,
          backgroundColor:'#fff'
    },
    lefttd:{
        height:40,
        width:300,
        border:'1px solid black'
    },
    middletd:{
        height:40,
        width:80,
        border:'1px solid black'
    },
    righttd:{
        height:40,
        width:300
    }
}















