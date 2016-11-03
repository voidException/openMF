/**
 * Created by mfhj-dz-001-424 on 16/11/3.
 */
/**
 * Created by mfhj-dz-001-424 on 16/11/3.
 */

import React,{Component}from 'react'
import { Link } from 'react-router'

export default  class Application extends Component {
    render() {
        return(
            <div style={styles.container}>
                <div>应用管理</div>
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
