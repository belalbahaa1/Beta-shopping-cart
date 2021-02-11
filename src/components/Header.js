import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./css/Header.css"
import {DataContext} from './Context'

export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle : false
    }
    
    menuToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        return (
            <header>
              
                <i className="fas fa-bars menu menu-icon" onClick={this.menuToggle}></i>
               
                <div className="logo">
                <h1> <Link to="/">Logo</Link></h1>
                </div>
                <nav>
                <ul className={toggle ? "toggle" : "" }>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/product">Product</Link></li>
                    <li> <Link to="/contact">Contact</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li> <Link to="/login">Login / Register</Link></li>
                    <li className="close">
                    <i className="fas fa-times close menu-icon" onClick={this.menuToggle}></i>
                    </li>
                </ul>
                <div className="nav-cart">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                    <i className="fas fa-cart-plus"></i>
                    </Link>
                    </div>
                </nav>
           </header>
        )
    }
}

export default Header
