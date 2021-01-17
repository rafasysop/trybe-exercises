import React, { Component, Fragment } from 'react';
import './Form.css';
import FormInput from './FormInput';

class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: { id: 'nome', campo: 'Nome', value: '', type: 'text', place: 'Digite seu nome' },
            email: { id: 'email', campo: 'Email', value: '', type: 'email', place: 'Digite seu email' },
            cpf: { id: 'cpf', campo: 'CPF', value: '', type: 'number', place: 'Digite seu cpf' },
            endereco: { id: 'endereco', campo: 'Endereço', value: '', type: 'text', place: 'Digite seu endereço' },
            cidade: { id: 'cidade', campo: 'Cidade', value: '', type: 'text', place: 'Digite sua cidade' },
            estado: { id: 'estado', campo: 'Estado', value: '', type: 'text', place: 'Digite seu estado' },
        }
    }

    handleChange = (e) => {
        let name = e.target.name;
        let valueName = e.target.value;

        this.setState({
            [name]: { ...this.state[name], value: valueName },
        })
    }

    formCurriculo = (e) => {
        e.preventDefault();
        console.log('Enviado');
    }

    verificaCidade = (e) => {
        let cidade = e.target.value;
        console.log(cidade[0]);
        if (cidade[0] === '1' ||
            cidade[0] === '2' ||
            cidade[0] === '3' ||
            cidade[0] === '4' ||
            cidade[0] === '5' ||
            cidade[0] === '6' ||
            cidade[0] === '8' ||
            cidade[0] === '9') {
            this.setState({
                cidade: { id: 'cidade', campo: 'Cidade - Não pode começar com um Numero', value: '', type: 'text', place: 'Digite sua cidade' }
            })
        } else {
            this.setState({
                cidade: {...this.state.cidade, campo: 'Cidade' }
            })
        }
    }

    handleSelect = (e) => {
        this.setState({
            estado: { ...this.state.estado, value: e.target.value }
        })
    }
    render() {

        const { nome, email, cpf, endereco, cidade, estado } = this.state;

        return (
            <form className="dados-pessoais" onSubmit={this.formCurriculo}>
                <fieldset defaultValue="Dados Pessoais" label="Dados Pessoais">
                    <FormInput nome={nome.campo} id={nome.id} onchange={this.handleChange} length="40" place={nome.place} required="true" nomeClasse="dados-input nome" />
                    <FormInput nome={email.campo} id={email.id} onchange={this.handleChange} length="50" place={email.place} required="true" nomeClasse="dados-input" />
                    <FormInput nome={cpf.campo} id={cpf.id} onchange={this.handleChange} length="11" place={cpf.place} required="true" nomeClasse="dados-input" />
                    <FormInput nome={endereco.campo} id={endereco.id} onchange={this.handleChange} length="200" place={endereco.place} required="true" nomeClasse="dados-input" />
                    <FormInput nome={cidade.campo} id={cidade.id} onchange={this.handleChange} value={cidade.value} onblur={this.verificaCidade} length="28" place={cidade.place} required="true" nomeClasse="dados-input" />
                    <label>
                        Estado
                        <select name="estado" required="true" value={this.state.estado.value} className="dados-input" onChange={this.handleSelect}>
                            <option value="paraiba" selected>PB</option>
                            <option value="goias" selected>GO</option>
                            <option value="sao-paulo" selected>SP</option>
                        </select>
                    </label>
                </fieldset>
                <fieldset label="Emprego">
                    <textarea name="resumo" maxLength="1000" required="true" className="dados-input" placeholder="Resumo"></textarea>
                    <textarea name="cargo" maxLength="40" className="dados-input" required="true" placeholder="Cargo"></textarea>
                    <FormInput nome="desc" length="500" required="true" nomeClasse="dados-input"/>
                </fieldset>
                <button type="submit" className="btn">Enviar</button>
            </form>


        );
    }
}

export default Forms;