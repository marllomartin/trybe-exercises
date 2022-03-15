import React, { Component } from 'react'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}
