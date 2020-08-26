import React from 'react';

class Click extends React.Component {
    state = {
        number : 1
    }

    randomNumber = () => {
        let randNum = Math.floor(Math.random()*10);
        this.setState({number: randNum});
    }
    render(){
        return(
            <div>
                <h1>Number is: {this.state.number}</h1>
                {this.state.number!==7
                ? <button onClick={this.randomNumber}>Click me!</button>
                : <h2>You win!</h2>}
            </div>
        )
    }
}

export default Click;