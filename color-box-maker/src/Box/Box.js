import React from 'react';

class Box extends React.Component {
    style= {
        width: this.props.width,
        height: this.props.height,
        backgroundColor: this.props.color
    }

    render(){
        return(
            <div style={this.style}>
                <button onClick={this.props.delete}>X</button>
            </div>
        )
    }
}

export default Box;