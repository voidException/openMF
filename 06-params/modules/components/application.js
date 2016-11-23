/**
 * Created by mfhj-dz-001-424 on 16/11/3.
 */
/**
 * Created by mfhj-dz-001-424 on 16/11/3.
 */

import React,{Component}from 'react'
import { Link } from 'react-router'
import UploadFile from '../uploadFile';
import { UrlApp} from '../url';
let width= document.documentElement.clientWidth;
//let defaultUrl='http://172.16.32.70:8080/openapi/account/app/query/';
let defaultUrl=UrlApp;
export default  class Application extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            apiList:null, //排列表
            apiType:null, //api类型
            apiDescription:null, //api描述
            arrays:[{
                "id":1,
                "appName":"测试APP",
                "appKey":"8e59476073e8105b",
                "appSecret":"a811f839edc9e287",
                "appType":1,
                "appRange":1,
                "status":1,
                "appDesc":"测试App",
                "tenant":1,
                "creator":"xiang.guo",
                "mail":"test@test.com",
                "phone":"18810126851",
                "updateTime":1462744567000
            },
            {
                "id":7,
                "appName":"APP采集信息上报",
                "appKey":"b4d0d468afa77ca4",
                "appSecret":"b615c3fa644ba917",
                "appType":1,
                "appRange":1,
                "status":1,
                "appDesc":"APP采集信息上报",
                "tenant":3,
                "creator":"xiang.guo",
                "mail":"xiang.guo@beebank.com",
                "phone":"18210126850",
                "updateTime":1462853019000
            }]
        };
      }

    componentDidMount() {
        let defaultParam=1;
        let  url=defaultUrl+defaultParam;
        let userid=sessionStorage.getItem("userid");
        let formData=new FormData();
        formData.append("userid",userid);
        let option={
            url:url,
            body:formData
        };
        let response=UploadFile(option);
        response.then(resp=> {
            console.log(JSON.stringify(resp));
            if(resp!==null){
                this.setState({
                    creatorName:resp.creator,
                    description:resp.description,
                    mail:resp.mail,
                    name:resp.name,
                    updateTime:resp.updateTime,
                    phone:resp.phone,
                    arrays:resp.list,
                });
            }
        }).catch(err=>{
            console.log(err);
        });
    }

    render() {
        return(
            <div style={styles.contain}>
                <div>我的应用</div>
                <div style={{display: 'block'}}>
                    <table cellSpacing="0" cellPadding="0"  style={{ borderCollapse: 'collapse',backgroundColor: 'white',width:800}}>
                        <thead>
                        <tr style={{border: '0.5px solid #DDDDDD',backgroundColor:'#666666',color: 'white',fontSize:14,height:30}}>
                            <td style={styles.td}>应用名称</td>
                            <td style={styles.td}>应用标志</td>
                            <td style={styles.td}>应用密码</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.arrays.map((item,index)=>{
                                return(
                                    <tr key={index} style={{border: '1px solid #DDDDDD',color:'#959595',height:30}} >
                                        <td style={styles.td}>{item.appName}</td>
                                        <td style={styles.td1}>{item.appKey}</td>
                                        <td style={styles.td}>{item.appSecret}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}



let styles = {
    container:{
        display:'flex',
        flexDirection:'row',
    },
    td:{
        border:'0.5px solid #DDDDDD',
        fontSize:12,
        paddingLeft:10,
        width:300,
    },
    td1:{
        border:'0.5px solid #DDDDDD',
        fontSize:12,
        paddingLeft:10,
        width:200
    },
    td2:{
        border:'0.5px solid #DDDDDD',
        fontSize:12,
        paddingLeft:10,
        width:300
    },
}
