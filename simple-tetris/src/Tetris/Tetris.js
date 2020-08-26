import React from 'react';
import shortId from 'shortid';

class Tetris extends React.Component {
    state = {
        grid : []
    }
    fillGrid = () => {
        let newGrid = [];
        for (let i=0;i<20;i++){
            let gridRow = [];
            for(let j=0;j<10;j++){
                gridRow.push(0);
            }
            newGrid.push(gridRow);
        }
        this.setState({grid: newGrid});
    }

    addI = (matrix) => {
        let newGrid = matrix;
        this.setState({grid: newGrid});
        let height = 0, i=3; // height of the matrix, iterator of for loop
        const timer = setInterval(()=>{ // every 1 sec, print 1 more line of 1s
            if(newGrid[height][3]===0){ // if the current position is full of 0s, fill it with 1s
                for(i=3;i<7;i++){ // fill four positions with number
                    newGrid[height][i]=1;
                }
                for(i=3;i<7;i++){ // now for the previous line
                    if(newGrid[height-1] !== undefined){ // if the line exists
                        newGrid[height-1][i]=0; // then fill it with 0s
                    }
                }
                this.setState({grid: newGrid});
                if(newGrid[height+1]!==undefined){ // if the next line of the grid exists
                    height++; // then proceed on the next line
                    console.log(height);
                } 
            }
            else {
                clearInterval(timer);
                console.log('program finished');
            }
        }, 1000);
    }

    drawT= (newGrid, y, x) => {
        newGrid[y][x]=2;
        newGrid[y][x-1]=2;
        newGrid[y+1][x]=2;
        newGrid[y][x+1]=2;
        this.setState({grid: newGrid});
    }

    addT = () => {
        let newGrid = this.state.grid;
        let y=0, x=4, center=newGrid[y][x];
        // center of T is at grid[y][x]
        // p1 of T is at grid[y][x-1]
        // p2 of T is at grid[y+1][x]
        // p3 of T is at grid[y][x+1]
        this.drawT(newGrid, y, x);
        //repeat every 1sec
        const timer = setInterval(()=>{
            // newGrid[y+2] is the next line
            //if the next line, on the posX is not undefined and is equals to 0
            if(newGrid[y+2]!==undefined && newGrid[y+2][x]===0){
                //then add 1 to the posY
                y++;
                // and clear the previous line
                if(newGrid[y-1]!==undefined){ // if previous line exists
                    for (let i = x-1;i<=x+1;i++){ // then fill the previous line with 0s
                        newGrid[y-1][i]=0;
                    }
                }
                // and somehow this will update the grid                
                this.drawT(newGrid,y,x);
            } else{
                clearInterval(timer);
                console.log('program finished!');
            }
        }, 1000);
    }

    printKey = (e) => {
        console.log(e.keyCode);
    }

    componentDidMount(){
        this.fillGrid();
    }

    render(){
        return(
            <div>
                <button onClick={()=>this.addI(this.state.grid)}>Add I</button>
                <table>
                <button onKeyDown={this.printKey} tabIndex="0" onClick={this.addT}>Add T</button>
                    <tbody>
                        {this.state.grid.map(value=> <tr key={shortId.generate()}>
                            {value.map(v => <td key={shortId.generate()} style={{color: v !==0 ? 'red': 'grey'}}>{v}</td>)}
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tetris;