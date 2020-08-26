import React from 'react';

const SlotMachine = props => {
    const win = {
            color: 'green'
        },
          lose= {
            color: 'red'      
        },
          winner = props.S1 === props.S2 && props.S2 === props.S3;

    return(
        <div>
            <p>{props.S1} {props.S2} {props.S3}</p>
            <p style={winner? win : lose}>{winner? 'You win!' : 'You lose'}</p>
        </div>
    )
    
    
}
export default SlotMachine;