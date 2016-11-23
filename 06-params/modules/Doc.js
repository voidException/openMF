import React,{Component}from 'react'
import NavLink from './NavLink';
import { Link } from 'react-router'

export default  class Doc extends Component {
  render() {
    return(
        <div style={styles.container} className="doc">
           <div className="doc">这里是文档中心</div>
            <div>{this.props.children}</div>
        </div>
    );
  }
}

let styles = {
  container:{
    display:'flex',
    flexDirection:'row',
      marginBottom:230
  }
}
