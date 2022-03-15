import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class PersonalFieldset extends Component {

  render() {

    const { name, email, age, handleChange } = this.props;


    return (
      <div>
        <fieldset>
            <legend>Informações pessoais</legend>

            <label htmlFor="name">
              Nome:
              <input
                id="name"
                name="name"
                type="text"
                onChange={ handleChange }
                value={ name }
              />
            { !name.length ? ' * nome em branco ' : ''}
            </label>

            <label htmlFor="email">
              Email:
              <input
                id="email"
                name="email"
                type="email"
                onChange={ handleChange }
                value={ email }
              />
            { !email.match(/^\S+@\S+$/i) ? ' * email inválido ' : '' }
            </label>

            <label htmlFor="age">
              Idade:
              <select
                id="age"
                name="age"
                onChange={ this.handleChange }
                value={ age }
              >
                <option value="">Selecione</option>
                <option value="adult">Maior que 18</option>
                <option value="underage">Menor que 18</option>
              </select>
            </label>
        </fieldset>
      </div>
    )
  }
}

PersonalFieldset.propTypes = {
  age: PropTypes.any,
  email: PropTypes.any,
  handleChange: PropTypes.any,
  name: PropTypes.any
}
