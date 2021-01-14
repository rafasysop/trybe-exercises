import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokedex from './Pokedex';

class Pokemon extends Component {
    render() {
        const { lista } = this.props
        return (
            <section className="lista-pokemons">
                {lista.map((pokemon) => (
                <Pokedex key={pokemon.id} name={pokemon.name} img={pokemon.image} type={pokemon.type} />))}
            </section>
        );
    }
}

Pokemon.propTypes = {
    lista: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Pokemon;