import React from 'react';
import Coin from '../Coin/Coin';
import {choice} from '../helpers';

class Flip extends React.Component{
    static defaultProps = {
        coins: [
            {side: 'head', src: 'https://www.ramint.gov.au/file/401/download?token=SjitG6Pn'},
            {side: 'tail', src: 'https://i.ebayimg.com/images/g/xtcAAOSwLwBaZigS/s-l400.jpg'}
        ]
    }
    state = {
        coin: null,
        count: 0,
        heads: 0,
        tails: 0
    }
    FlipCoin = () => {
        const newCoin = choice(this.props.coins);
        const newState= {
            coin: newCoin,
            count: this.state.count+1,
            heads: newCoin.side === 'head'?this.state.heads+1: this.state.heads,
            tails: newCoin.side === 'tail'?this.state.tails+1: this.state.tails
        };
        this.setState(newState);
    }
    FlipHandler = (e) => {
        this.FlipCoin();
    }

    render(){
        return(
            <div>
                <h1>Coin Flipper!</h1>
                {this.state.coin && <Coin coin={this.state.coin}/>}
                <p>Clicked {this.state.count} times, {this.state.heads} heads and {this.state.tails} tails </p>
                <button onClick={this.FlipHandler}>Flip coin!</button>
            </div>
        )
    }
}

export default Flip;