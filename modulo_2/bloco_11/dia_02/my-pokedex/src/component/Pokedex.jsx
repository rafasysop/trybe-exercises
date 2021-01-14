import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokedex extends Component {
    render() { 
        const { name, img, type } = this.props;
        return ( <section className="card">
            <header>{name}</header>
            <img src={img} alt="Imagem do pokemon" />
            <p>tipo do pokemon: {type}</p>
            </section> );
    }
}
Pokedex.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
} 
export default Pokedex;