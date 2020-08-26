const addI = (matrix) => {
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

export {addI};