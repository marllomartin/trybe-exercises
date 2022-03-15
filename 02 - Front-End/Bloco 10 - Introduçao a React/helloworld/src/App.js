import React, { Component } from 'react'

const taskFunc = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskArr = ['Alimentar o cachorro', 'Organizar o armário', 'Varrer o quintal']

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>Hello World!</h3>
        <p>Tarefas:</p>
        <ol>
          { taskArr.map((task) => taskFunc(task)) }
        </ol>
      </div>
    )
  }
}
