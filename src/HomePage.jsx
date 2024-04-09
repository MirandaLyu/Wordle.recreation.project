import React from 'react'
import Navbar from './Navbar';

export default function HomePage() {

    return (
        <div>
            <Navbar />
            <div style={{textAlign: "center", paddingTop: 20}}>
            <p>Hi, welcome to here! This is Wordle. </p>
            <p>Press "game" will direct you to the game</p>
            <p>Press "rules" will tell you how to play it</p>
            <p>Have fun &#9924;</p>
            </div>
        </div>
        )
}