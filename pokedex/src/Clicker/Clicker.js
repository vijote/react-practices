import React from 'react';
import './Clicker.css';

class Clicker extends React.Component {
    state={
        count: 0,
        mousePrice: 10,
        computerPrice: 1000,
        clickers: [],
        computers: 0

    }

    countHandler = () =>{
        this.setState({count: this.state.count+1});
    }
    buyMouse = () => {
        const interval = setInterval(() => this.setState({count:this.state.count+1}), 1000);
        this.setState({count: this.state.count-this.state.mousePrice,
                mousePrice: this.state.mousePrice*2,
                   clickers : this.state.clickers.concat('clicker')});        
    }
    buyComputer = () => {
        const interval = setInterval(() => this.setState({count:this.state.count+10}), 4000);
        this.setState({count : this.state.count-this.state.computerPrice,
                computerPrice: this.state.computerPrice + this.state.computerPrice*0.8,
                   computers : this.state.computers+1});        
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.countHandler}>Click me!</button>
                <div>
                    {this.state.count >=this.state.mousePrice
                    ? <button onClick={this.buyMouse}>Buy mouse</button>
                    : null}
                </div>
                <div>
                </div>
                        <div>
                            {this.state.clickers.map(clicker => <img className="Clicker-img" 
                            src="https://pbs.twimg.com/profile_images/550693983811170304/2MaGJRPC.jpeg"/>)}
                        </div>
            </div>

        )
    }
}

export default Clicker;