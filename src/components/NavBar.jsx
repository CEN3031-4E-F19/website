import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class NavBar extends Component {
    render() { 
        return (
        <nav className="navbar navbar-expand-lg">
            <img className="navbar-brand" src = "/niekaabLogo.png" width="10%" height="10%"/>  
            <ul className="navbar-nav">
                <li className="nav-item nav-link"><NavLink to="/">Home</NavLink></li>
                <li className="nav-item nav-link"><NavLink to="/Contact">Contact</NavLink></li>
                <li className="nav-item nav-link"><NavLink to="/News">News</NavLink></li>
                <li className="nav-item nav-link"><NavLink to="/Login">Admin</NavLink></li>
            </ul>          
        </nav>
        );
    }
}
 
export default NavBar;