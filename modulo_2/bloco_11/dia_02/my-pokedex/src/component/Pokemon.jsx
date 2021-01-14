import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokedex from './Pokedex';

class Pokemon extends Component {
    render() { 
        const uName = 'teste';
        return ( <Pokedex name={uName} /> );
    }
}
 
Pokemon.propTypes = {
    uName: PropTypes.string.isRequired
}
export default Pokemon;