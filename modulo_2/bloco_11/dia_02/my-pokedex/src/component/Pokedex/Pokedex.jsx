import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from '../Pokemon/Pokemon';
import './pokedex.css';

class Pokedex extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon: 0,
            listaPokemon: this.props.lista,
        }
    }

    handleProximo() {
        this.state.pokemon + 1 < this.state.listaPokemon.length ?
            this.setState((state, _props) => ({
                pokemon: state.pokemon +1,
            }))  
        :   this.setState((_state, _props) => ({
                pokemon: 0,
            }))     
    }

    handleTipo(e) {
        const tipo = e.target.innerHTML;
        console.log('O tipo é', tipo);

        this.setState((state, _props) => ({
            listaPokemon: this.props.lista.filter(pokemon => pokemon.type === tipo),
            pokemon:0,
        })) 
    }
    handleTodos() {
        this.setState((state, _props) => ({
            listaPokemon: this.props.lista,
            pokemon:0,
        })) 
    }
  

    render() {
        let listaPokemon = this.state.listaPokemon;
        return (
            <section className="lista-pokemons">
                <div>
                    
                    {listaPokemon.filter((_pokemon, index) => ( index === this.state.pokemon)).map((pokemon) => (
                    <Pokemon key={pokemon.id} name={pokemon.name} img={pokemon.image} type={pokemon.type} />))}
                </div>
                <div>
                    <button className="prox" onClick={ this.handleProximo.bind(this) }>Próximo</button>
                </div>
                <div>
                    <button className="tipo" onClick={ this.handleTodos.bind(this) }>Todos</button>
                    <button className="tipo" onClick={ this.handleTipo.bind(this) }>Fire</button>
                    <button className="tipo" onClick={ this.handleTipo.bind(this) }>Psychic</button>
                </div>
            </section>
        );
    }
}

Pokedex.propTypes = {
    lista: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Pokedex;