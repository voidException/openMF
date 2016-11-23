
import React,{Component}from 'react'
import { Link } from 'react-router'
import UploadFile from '../uploadFile';
import { UrlService} from '../url';
let width= document.documentElement.clientWidth;
let defaultUrl=UrlService;
let page=1;
export default  class Service extends Component {
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            pages:1,
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
    clickMeUp(){
        if (page==1){
            return
        }
        page--;
        let defaultParam=page;
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
                    arrays:resp.list,
                });
            }
        }).catch(err=>{
            console.log(err);
        });
    }
    clickMeDown(){

        page++;
        let defaultParam=page;
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
                    arrays:resp.list,
                });
            }
        }).catch(err=>{
            console.log(err);
        });
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
                    arrays:resp.list,
                    pages:resp.pages
                });
            }
        }).catch(err=>{
            console.log(err);
        });
    }

    render() {
        return(
            <div style={styles.contain}>
                <div>我的服务</div>
                <div style={{display: 'block'}}>
                    <table cellSpacing="0" cellPadding="0"  style={{ borderCollapse: 'collapse',backgroundColor: 'white',width:800}}>
                        <thead>
                            <tr style={{border: '0.5px solid #DDDDDD',backgroundColor:'#666666',color: 'white',fontSize:12,height:30}}>
                                <td style={styles.td}>服务标志</td>
                                <td style={styles.td}>服务中文名</td>
                                <td style={styles.td}>服务类型</td>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.arrays.map((item,index)=>{
                                return(
                                    <tr key={index} style={{border: '1px solid #DDDDDD',color:'#959595',height:30}} >
                                        <td style={styles.td}>{item.apiName}</td>
                                        <td style={styles.td1}>{item.apiZnName}</td>
                                        <td style={styles.td2}>{item.apiType}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
                <div style={styles.bottom}>
                    <button type="button"  onClick={this.clickMeUp.bind(this)} >上一页</button>
                    <button type="button"  onClick={this.clickMeDown.bind(this)}>下一页</button>
                    <div style={styles.page}>共{this.state.pages}页</div>
                </div>
            </div>
        );
    }
}

let styles = {
    contain:{
        display:'flex',
        flexDirection:'column',
    },
    td:{
        border:'0.5px solid #DDDDDD',
        fontSize:13,
        paddingLeft:10,
        width:400
    },
    td1:{
        border:'0.5px solid #DDDDDD',
        fontSize:13,
        paddingLeft:10,
        width:300
    },
    td2:{
        border:'0.5px solid #DDDDDD',
        fontSize:13,
        paddingLeft:10,
        width:50
    },
    bottom:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10,
    },
    page:{
        marginLeft:10
    }
}
