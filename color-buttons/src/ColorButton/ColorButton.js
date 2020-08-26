import React from 'react';

class ColorButton extends React.Component {
    static defaultProps = {
        colors : ['red', 'blue', 'green', 'violet']
    }
    changeBackground = (color) =>{
        
    }
    render(){
        return(
            <div>
                {this.props.colors.map(
                    color => <button style={{
                        backgroundColor: color,
                        border: 'none',
                        margin: '10px',
                        width: '100px',
                        height: '30px',
                        color:'white',
                        fontWeight: 'bold',
                        outline: 'none'}}
                        onClick={changeBackground(color)}>
                            Click me!</button>)}
            </div>
        )
    }
}

export default ColorButton;