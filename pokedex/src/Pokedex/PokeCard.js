import React, {Component} from 'react';
import axios from 'axios';

const style = {
    border: '1px solid lightgrey',
    borderRadius: '30px',
    width: '20%',
    display: 'inline-block',
    boxShadow: '6px 6px 5px 0px rgba(240,240,240,1)',
    margin: '1%'
}

class PokeCard extends Component {
    state = {
        name: '',
        type: '',
        sprite: '',
        exp: ''
    };

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon/' + this.props.name)
        .then(res => {
            this.setState({ name : res.data.name });
            this.setState({ type : res.data.types[0].type.name });
            this.setState({ sprite : res.data.sprites.front_default });
            this.setState({ exp : res.data.base_experience });
        })
    }

    render(){
        return(
            <div style={style}>
                <h2>{this.state.name}</h2>
                <img src={this.state.sprite}/>
                <p>Type: <strong>{this.state.type}</strong></p>
                <p>Base XP: <strong>{this.state.exp}</strong></p>
            </div>
        )
    }
}
export default PokeCard;