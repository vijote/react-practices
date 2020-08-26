import React from 'react';
import './Light.css'
class Light extends React.Component{
    render(){
        return(
            <td 
            className={this.props.switch? 'Light on': 'Light off'}
            onClick={this.props.click}>              
            </td>
        )
    }
}
export default Light;