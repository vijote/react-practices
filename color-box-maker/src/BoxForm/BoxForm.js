import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class BoxForm extends React.Component{
    state={
        height: "",
        width: "",
        color:""
    }
    handleChange = (evt) => {
        this.setState({[evt.target.name]:evt.target.value});
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        const box = { ...this.state, id: uuidv4()};
        this.props.submit(box);
        this.setState({height: "",
                        width: "",
                        color:""})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="height">Height: </label>
                        <input id="height" name="height" type="text" value={this.state.height} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="hwidth">Width: </label>
                        <input id="width" name="width" type="text" value={this.state.width} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="color">Color: </label>
                        <input id="color" name="color"  type="text" value={this.state.color} onChange={this.handleChange}/>
                    </div>
                    <button>Add new box</button>
                </form>
            </div>
        )
    }
}

export default BoxForm;