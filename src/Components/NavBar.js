import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-2">
            <Link className="navbar-brand" to="/">ABP News</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Latest News</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/textUtils">Text Utils</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/expenseItems">Add Filter Expense</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">Validation</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/foodApp">Order Food</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/userInfo">Form Validation Hook</Link>
                    </li>
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}

export default NavBar

