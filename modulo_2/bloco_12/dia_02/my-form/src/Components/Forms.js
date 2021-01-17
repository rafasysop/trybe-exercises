import React, { Component, Fragment } from 'react';
import './Form.css';
import FormInput from './FormInput';

class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: { id: 'nome', campo: 'Nome', value: '', type: 'text', place: 'Digite seu nome' },
            email: { id: 'email', campo: 'Email', value: '', type: 'email', place: 'Digite seu email'  },
            cpf: { id: 'cpf', campo: 'CPF', value: '', type: 'number', place: 'Digite seu cpf'  },
            endereco: { id: 'endereco', campo: 'Endereço', value: '', type: 'text', place: 'Digite seu endereço'  },
            cidade: { id: 'cidade', campo: 'Cidade', value: '', type: 'text', place: 'Digite sua cidade'  },
            estado: { id: 'estado', campo: 'Estado', value: '', type: 'text', place: 'Digite seu estado'  },
        }
    }

    handleChange = (e) => {
        let name = e.target.name;
        let valueName = e.target.value;

        this.setState ({
            [name]: {...this.state[name], value: valueName },
        })
    }

    formCurriculo(e) {
        e.preventDefault();
    }

    verificaCidade = (e) => {
        let cidade = e.target.value;
        console.log(cidade[0]);
        if(cidade[0] === '1' ||
        cidade[0] === '2' ||
        cidade[0] === '3' ||
        cidade[0] === '4' ||
        cidade[0] === '5' ||
        cidade[0] === '6' ||
        cidade[0] === '8' ||
        cidade[0] === '9'){
            this.setState({
                cidade: { id: 'cidade', campo: 'Cidade - Não pode começar com um Numero', value: '', type: 'text', place: 'Digite sua cidade'  }
            })
        } 
    }

    handleSelect = (e) => {
        this.setState({
            estado: {...this.state.estado, value: e.target.value }
        })
    }
    render() {

        const { nome, email, cpf, endereco, cidade, estado } = this.state;

        return (
            <form className="dados-pessoais" onSubmit={this.formCurriculo}>
                <fieldset defaultValue="Dados Pessoais">
                    <FormInput nome={nome.campo} id={nome.id} onchange={this.handleChange} length="40" place={nome.place} required="true" nomeClasse="dados-input nome" />
                    <FormInput nome={email.campo} id={email.id} onchange={this.handleChange} length="50" place={email.place} required="true" nomeClasse="dados-input" />
                    <FormInput nome={cpf.campo} id={cpf.id} onchange={this.handleChange} length="11" place={cpf.place} required="true" nomeClasse="dados-input" />
                    <FormInput nome={endereco.campo} id={endereco.id} onchange={this.handleChange} length="200" place={endereco.place} required="true" nomeClasse="dados-input" />
                    <FormInput nome={cidade.campo} id={cidade.id} onchange={this.handleChange} value={cidade.value} onblur={this.verificaCidade} length="28" place={cidade.place} required="true" nomeClasse="dados-input" />
                    <label>
                        Estado
                        <select name="estado" value={this.state.estado.value} className="dados-input" onChange={this.handleSelect}>
                            <option value="paraiba" selected>PB</option>
                            <option value="goias" selected>GO</option>
                            <option value="sao-paulo" selected>SP</option>
                        </select>
                    </label>


                    {/* <label> {nome.campo} <input id="nome" maxLength="40" name="nome" type="text" placeholder="Digite seu nome" required className="dados-input nome" /></label>
                    <label> {email.campo} <input id="email" maxLength="50" name="email" type="email" placeholder="Digite um email ex: a@a.com" required className="dados-input" /></label>
                    <label> {cpf.campo} <input id="cpf" maxLength="50" name="cpf" placeholder="Digite seu CPF" type="number" required className="dados-input" /></label>
                    <label> {endereco.campo} <input id="endereco" maxLength="50" name="endereco" placeholder="Digite seu endereço" type="text" required className="dados-input" /></label>
                    <label> {cidade.campo} <input id="endereco" maxLength="50" name="endereco" placeholder="Digite seu endereço" type="text" required className="dados-input" /></label>
                    <label> {estado.campo} <input id="endereco" maxLength="50" name="endereco" placeholder="Digite seu endereço" type="text" required className="dados-input" /></label> */}
                </fieldset>

            </form>
        );
    }
}

export default Forms;