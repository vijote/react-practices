import React from 'react';


class Coin extends React.Component{
    style={
        width: '200px'
    }
    render(){
        return(
            <div>
                <img src={this.props.coin.src} alt={this.props.coin.side} style={this.style}/>
            </div>
        )
    }
}

export default Coin;