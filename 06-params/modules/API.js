/**
 * Created by mfhj-dz-001-424 on 16/11/18.
 */
import React,{Component}from 'react'
import NavLink from './NavLink';
import { Link } from 'react-router'

export default  class API extends Component {

    // 构造
      constructor(props) {
        super(props);
      }

    componentDidMount() {
        //let changeWidth;
        //let changeHeight;
        //window.onresize = ()=>{
        //    changeWidth=document.documentElement.clientWidth;
        //    changeHeight=document.documentElement.clientHeight;
        //    console.log(changeWidth);
        //    console.log(changeHeight);
            //console.log(this.constructor.name);
            //if (this.constructor.name=='API'){
            //    this.setState({
            //        width:changeWidth,
            //        height:changeHeight
            //    })
            //}
        //}
    }

    componentDidUpdate() {

    }
    render() {

        return(
            <div style={styles.container} className="frame">
                <iframe  className="frame" src="http://localhost:8080/openapi/destination/serviceDetail_1.html" allowTransparency="true"></iframe>
            </div>
        );
    }
}

let styles = {
    container:{
        display:'flex',
        flexDirection:'row',
       // marginBottom:120
    },
}
