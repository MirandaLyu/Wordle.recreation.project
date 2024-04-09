/* this is the page for choosing difficulty */

import React from "react";
import { NavLink } from 'react-router-dom';
import Navbar from "./Navbar";

const ChooseDifficulty = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <Navbar />
            <h2><i>How difficult you want your game to be?</i></h2>
            <NavLink to="/game/normal">
                <button>normal</button>
            </NavLink>
            <NavLink to="/game/hard">
                <button>harder</button>
            </NavLink>
        </div>
    )
}

export default ChooseDifficulty