import React from 'react';

class LottoBall extends React.Component{
    
    style={
        backgroundColor: '#d15930',
        width: '50px',
        height: '50px',
        borderRadius: '100px',
        lineHeight: '50px',
        display: 'inline-block',
        marginLeft: '5px',
        marginRight: '5px',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#fff8e6'
    }
    

    render(){
        return(
            <div>
                {this.props.num.map(ball => <p style={this.style}>{ball}</p>)}
            </div>
        )
    }
}

export default LottoBall;