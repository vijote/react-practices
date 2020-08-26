import React from 'react';
import LottoBall from '../LottoBall/LottoBall';

class Lotto extends React.Component {
    static defaultProps = {
        title: 'Lottery',
        balls: 6,
        maxNum: 40
    }
    
    state={
        nums : Array.from({length: this.props.balls})
    }

    generateBalls = () => {
        let Balls = [];
        for(let i=0;i<this.props.balls;i++){
            Balls.push(Math.floor(Math.random()* this.props.maxNum+1));
        }
        this.setState({nums: Balls});
    }

    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <LottoBall num={this.state.nums}/>
                <button onClick={this.generateBalls}>Generate</button>
            </div>
        )
    }
}

export default Lotto;