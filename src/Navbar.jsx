/* Navbar.jsx is a functional component that renders the navigation bar for the application. */

import React from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.css'


export default function Navbar () {

    return (
        <div className="background">
        <h1>Welcome to Miranda's Wordle</h1>
        <div className="space">
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/game">
                Game
            </NavLink>
            <NavLink to="/rules">
                Rules
            </NavLink>
        </div>
        </div>
    )
}