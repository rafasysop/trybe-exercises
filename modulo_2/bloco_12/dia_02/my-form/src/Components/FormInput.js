import React, { Component } from 'react';

class FormInput extends Component {
    render() { 
        const { nome, id, onchange, value, onblur, length, place, type, required, nomeClasse } = this.props;
        return ( 
            <label> {nome} <input name={id} id={id} onChange={onchange} value={value} onBlur={onblur} maxLength={length}  placeholder={place} type={type} required={required} className={nomeClasse} /></label>
         );
    }
}
 
export default FormInput;