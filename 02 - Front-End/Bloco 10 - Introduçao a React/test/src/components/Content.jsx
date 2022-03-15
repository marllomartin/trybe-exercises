import React, { Component } from 'react'

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

export default class Content extends Component {
  render() {
    return (
      <div>
      <ul>
        {conteudos.map((x) => (
      <li key={x.conteudo}>
        <h4>{`nome: ${x.conteudo}`}</h4>
        <p>{`status: ${x.status}`}</p>
        <p>{`bloco: ${x.bloco}`}</p>
      </li>
      ))}
      </ul>
      </div>
    )
  }
}
