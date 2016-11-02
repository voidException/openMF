import React,{Component}from 'react'
import NavLink from './NavLink';
import { Link } from 'react-router'

export default  class About extends Component {
  render() {
    return(
        <div style={styles.container}>
           <div><Link to="/hello">API</Link></div>
           <div>{this.props.children}</div>
        </div>
    );
  }
}

let styles = {
  container:{
    display:'flex',
    flexDirection:'row',
  }
}
