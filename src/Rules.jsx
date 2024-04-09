/* This component is to show the rules of the game on the Rules page. */

import React from "react";
import Navbar from "./Navbar";


const Rules = () => {
    return (
        <div>
            <Navbar />
            <h3 style={{textAlign: "center"}}>This is how to play this game:</h3>
            <ol style={{paddingLeft: 200, paddingRight: 200, paddingTop: 20}}>
            <li>Choose a difficulty level you want to play</li>
            <li>If you choose "normal", you have 6 times to guess a 6-letter word;
                if you choose "hard", you have 5 times to guess a 7-letter word
            </li>
            <li>The color of the tiles will tell you how close your guess is to the word: 
                "green" means the letter is in the word and in the correct spot;
                "yellow" means the letter is in the word but in the wrong spot;
                "grey" means the letter is not in the word
            </li>
            <li>If you enter the right word, you win; if you've used up all the attempts, you lose.
                Either way, the game goes to the next round
            </li>
            </ol>
        </div>
    )
}

export default Rules;