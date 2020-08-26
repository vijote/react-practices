import React from 'react';
import Light from '../Light/Light';
import shortId from 'shortid';
import './Lightset.css'
class Lightset extends React.Component{
    state = {
        lightset : []
    }

    fillArray = () => {
        let arrayToFill = [];
        for (let i=0; i<25; i++){
            arrayToFill.push(false);
        }
        this.setState({lightset : arrayToFill});
    }

    toggleLights(id){
        let newArray= this.state.lightset;
        //center
        newArray[id]=!newArray[id];
        //top
        if(newArray[id-5] !== undefined){
            newArray[id-5] = !newArray[id-5];
        }
        //bottom
        if(newArray[id+5] !== undefined){
            newArray[id+5] = !newArray[id+5];
        }
        //left
        if(newArray[id-1] !== undefined){
            newArray[id-1] = !newArray[id-1];
        }
        //right
        if(newArray[id+1] !== undefined){
            newArray[id+1] = !newArray[id+1];
        }

        this.setState({lightset: newArray});
    }
    render(){
        return(
            <div className='Lightset'>
                <button onClick={this.fillArray}>Play</button>
                <div>
                {this.state.lightset.map(
                    (turn, id) => <div key={shortId.generate()}
                    onClick={() => this.toggleLights(id)}
                    className={turn ? 'Light on': 'Light off'}></div>
                )}
                </div>                
            </div>
        )
    }
}
export default Lightset;