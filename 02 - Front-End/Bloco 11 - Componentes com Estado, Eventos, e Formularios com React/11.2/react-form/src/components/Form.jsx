import React, { Component } from 'react'
import DataFieldset from './DataFieldset';
import PersonalFieldset from './PersonalFieldset';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: '',
      description: '',
      terms: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, email, age, description, terms } = this.state;


    return (
      <div>
        <h1>React State Form Test</h1>
        <form className="form">
          
          <PersonalFieldset
            name={ name }
            email={ email }
            age={ age }
            handleChange={ this.handleChange }
          />

          <DataFieldset
            description={ description }
            handleChange={ this.handleChange }
          />

          <label htmlFor="terms">
            <input
              id="terms"
              type="checkbox"
              name="terms"
              onChange={ this.handleChange }
              value={ terms }
            />
            Concordo com termos
          </label>
        </form>
      </div>
    );
  }
}
