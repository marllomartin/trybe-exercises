import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class DataFieldset extends Component {
  render() {

    const { description, handleChange } = this.props;

    return (
      <div>
        <fieldset>
            <legend>Texto e arquivos</legend>
            <label htmlFor="description">
              Descrição:
              <textarea
                id="description"
                name="description"
                onChange={ handleChange }
                value={ description }
              />
            { !description.length ? ' * campo vazio ' : ''}
            </label>

            <input type="file" />
          </fieldset>
      </div>
    )
  }
}

DataFieldset.propTypes = {
  description: PropTypes.any,
  handleChange: PropTypes.any
}
