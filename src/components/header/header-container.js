import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './header-container.css'

// const Header = () => (
//   <h1>Header</h1>
// )
class Header extends Component {
  onLogoutClick = (event) => {
    event.preventDefault()
    // this.props.logout()
  }
  render() {
    return (
      <div className="header-container">
        <a className="title" href="#title">Stupid Todos</a>
        { this.props.username !== null && <a href="#logout" onClick={ this.LogoutClick }>{`Logout ${this.props.username}`}</a>}
      </div>
    )
  }
}

const mapStateToProps = (state) => state.auth
//const mapDispatchToProps = (dispatch) => bindActionCreators({ logout }, dispatch)

export default connect(mapStateToProps)(Header)
