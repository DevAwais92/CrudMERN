import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link font-weight-bold" to="/home"><b>Employees List</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create">Create New Employee</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
