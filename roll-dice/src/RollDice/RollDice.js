import React from 'react';
import Die from '../Die/Die';
import './RollDice.css';

class RollDice extends React.Component{
    state= {
        diceOne: 1, 
        diceTwo: 6, 
        isRolling: false
    }

    roll = () => {
        const randomOne= Math.floor(Math.random()*6+1);
        const randomTwo= Math.floor(Math.random()*6+1);
        this.setState({
            diceOne : randomOne, diceTwo: randomTwo,
            isRolling: true
        })
        setTimeout(() => {this.setState({isRolling:false})},800
        );
    }

    render(){
        return(
            <div>
                <Die number={this.state.diceOne} animate={this.state.isRolling}/>
                <Die number={this.state.diceTwo} animate={this.state.isRolling}/>
                <button 
                    className="RollDice-button" 
                    disabled={this.state.isRolling}
                    onClick={this.roll}>
                    {this.state.isRolling? 'Rolling...' : 'Roll dice!'}
                </button>
            </div>
        )
    }
}

export default RollDice;