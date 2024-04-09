/* here is the logic of how the board is displayed */

import React from "react";
import SixSquares from "./SixSquares";

const BoardOfSix = (props) => {
    const wordList = props.wList

    return (
        <div style={{width: 220, padding: 5, flexWrap: "wrap"}}>
            <SixSquares word={wordList[0]}/>
            <SixSquares word={wordList[1]}/>
            <SixSquares word={wordList[2]}/>
            <SixSquares word={wordList[3]}/>
            <SixSquares word={wordList[4]}/>
            <SixSquares word={wordList[5]}/>
        </div>
    )
}

export default BoardOfSix