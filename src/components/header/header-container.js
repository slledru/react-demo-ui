import React, { Component } from 'react'
import './header-container.css'

// const Header = () => (
//   <h1>Header</h1>
// )
class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <a className="title" href="#title">Stupid Todos</a>
      </div>
    )
  }
}

export default Header
