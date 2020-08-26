import React from 'react';
import Light from '../Light/Light';
import shortId from 'shortid';
import './Lightset.css'
class Lightset extends React.Component{
    state = {
        lightset : [],
        winner : false
    }

    fillBoard = () => {
        let matrixHeight = [];
        for (let i=0; i<this.props.height; i++){
            let matrixWidth = [];
            for(let j=0; j<this.props.width;j++){
                let randomValue = Math.floor(Math.random()*2);
                matrixWidth.push(randomValue === 1 ? true: false );

            };
            matrixHeight.push(matrixWidth);
        }
        this.setState({lightset : matrixHeight});
    }
    
    switchLight = (grid, y,x) => {
        if(grid[y]!==undefined && grid[y][x]!==undefined){ // if the line exists AND the position in that line exists
            grid[y][x] = !grid[y][x];
        }
    }

    toggleLights = (y, x) => {
        let {lightset} = this.state; // create new matrix
        this.switchLight(lightset, y,x); // center
        this.switchLight(lightset, y-1,x); // up
        this.switchLight(lightset, y+1,x); // down
        this.switchLight(lightset, y,x-1); // left
        this.switchLight(lightset, y,x+1); // right

        //check if all lights are on
        let winner = lightset.every(row=> row.every(cell => cell===true));

        //set new values to lightset and winner variable
        this.setState({lightset:lightset, winner: winner});
        
        
    }
    componentDidMount(){ // run this on page startup
        this.fillBoard();
    }

    render(){
        if(this.state.winner===true){
            return <h1 className="winner">YOU WON!</h1>
        } else{
        return(
            <div>
                <h1 className="title"><span className="lightblue">BLINDING </span><span className="purple">LIGHTS</span></h1>
                <table>
                    <tbody>
                        {this.state.lightset.map((row, idY) => 
                            <tr key={shortId.generate()}>
                                {row.map((col, idX) =>
                                <Light key={shortId.generate()}
                                click={() => this.toggleLights(idY, idX)}
                                switch={col}/>)}
                            </tr>
                        )}
                    </tbody>
                </table>   
                          
            </div>
        )
    }
    }
}
export default Lightset;