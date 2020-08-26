import React from 'react';
import './Die.css';

class Die extends React.Component {
        dices = [
            {num : 1, icon : <i className="fas fa-dice-one"></i>},
            {num : 2, icon : <i className="fas fa-dice-two"></i>},
            {num : 3, icon : <i className="fas fa-dice-three"></i>},
            {num : 4, icon : <i className="fas fa-dice-four"></i>},
            {num : 5, icon : <i className="fas fa-dice-five"></i>},
            {num : 6, icon : <i className="fas fa-dice-six"></i>}
        ]
    render(){
        return(
            <div className={this.props.animate ? "Die Die-Rolling" : "Die"}>
                {this.dices.map(dice => dice.num===this.props.number && dice.icon)}
            </div>
        )
    }
}
export default Die;