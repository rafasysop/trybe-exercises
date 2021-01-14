import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from '../Pokemon/Pokemon';
import './pokedex.css';

class Pokedex extends Component {
    constructor(){
        super();
        this.state = {
            pokemon: 0,
        }
    }

    handleProximo() {
        this.state.pokemon + 1 < this.props.lista.length ?
            this.setState((state, _props) => ({
                pokemon: state.pokemon +1,
            }))  
        :   this.setState((_state, _props) => ({
                pokemon: 0,
            }))     
    }
  

    render() {
        let listaPokemon = this.props.lista;
        return (
            <section className="lista-pokemons">
                <div>
                    {/* .filter(pokemon => pokemon.type === this.state.tipo) */}
                    {listaPokemon.filter((_pokemon, index) => ( index === this.state.pokemon)).map((pokemon) => (
                    <Pokemon key={pokemon.id} name={pokemon.name} img={pokemon.image} type={pokemon.type} />))}
                </div>
                <div>
                    <button className="prox" onClick={ this.handleProximo.bind(this) }>Próximo</button>
                </div>
                <div>
                    {/* <button onClick={ this.handleTipo.bind(this) }>Fire</button>
                    <button onClick={ this.handleTipo.bind(this) }>Psychic</button> */}
                </div>
            </section>
        );
    }
}

Pokedex.propTypes = {
    lista: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Pokedex;