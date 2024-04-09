/* this is the board level */

import React from "react";
import SevenSquares from "./SevenSquares";

const SevenTimesFive = (props) => {
    const wordList = props.wList

    return (
        <div style={{width: 250, padding: 5, flexWrap: "wrap"}}>
            <SevenSquares word={wordList[0]}/>
            <SevenSquares word={wordList[1]}/>
            <SevenSquares word={wordList[2]}/>
            <SevenSquares word={wordList[3]}/>
            <SevenSquares word={wordList[4]}/>
        </div>
    )
}

export default SevenTimesFive