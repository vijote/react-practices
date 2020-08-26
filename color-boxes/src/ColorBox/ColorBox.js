import React from 'react';
import {generateColors, pickColor} from './Helpers';
import ColorDisplay from '../ColorDisplay/ColorDisplay';

class ColorBox extends React.Component{
    static defaultProps = {
        colors : generateColors()
    }
    state= {
        background: pickColor(this.props.colors)
    }
    clickHandler = (e) =>{
        const newBg= pickColor(this.state.colors);
        this.setState({background: newBg});
        console.log('heyy');
    }

    render(){
        return(
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                
                {this.props.colors.map(color =>
                    <ColorDisplay onClick={this.clickHandler}
                     background={this.state.background}/>)}
            </div>
        )
    }
}

export default ColorBox;