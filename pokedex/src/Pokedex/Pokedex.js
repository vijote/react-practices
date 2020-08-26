import React, {Component} from 'react';
import PokeCard from './PokeCard';

class Pokedex extends Component {
    pokemons = ['pikachu', 'ditto', 'charmander', 'squirtle', 'monferno', 'torterra', 'oshawott', 'serperior'];
    totalXP = 0;
    randomPick = () =>{
        return (this.pokemons[Math.floor(Math.random() * 8)]);
    }
    render(){
        return(
            <div>
                <PokeCard name={this.randomPick()}/>
                <PokeCard name={this.randomPick()}/>
                <PokeCard name={this.randomPick()}/>
                <PokeCard name={this.randomPick()}/>
            </div>
            
        )
    }
}

export default Pokedex;