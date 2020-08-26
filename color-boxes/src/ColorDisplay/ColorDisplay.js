import React from 'react';
import './ColorDisplay.css'

class ColorDisplay extends React.Component{
    
    render(){
        return(
            <div className='Box' style={{backgroundColor: this.props.background}}></div>
        )
    }
}

export default ColorDisplay;