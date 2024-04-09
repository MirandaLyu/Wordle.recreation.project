/* here defines how each guess word is compared with the secret word */

import React, { useContext } from "react";
import SingleSquare from "./SingleSquare";
import { normalContext } from "./NormalProvider";

const secrectWords = ["memory", "avenue", "hardly",
                    "planet", "review", "secret",
                    "ticket", "valley", "wonder", "native"]

export default function SixSquares (props) {

    const guessWord = props.word
    const [round, setRound] = useContext(normalContext);
    const answer = secrectWords[round]

    const answerArray = answer.split(""); // split because string is immutable

    let colorArray = ["", "", "", "", "", ""];

    if (guessWord.length !== 0) {
        for (let index = 0; index < 6; index++) {
            // first identify green elements (have priority)
            if (guessWord[index] === answer[index]) {
                colorArray[index] = "green";
                answerArray[index] = "_";
            }
        }
        console.log(colorArray);

        for (let index = 0; index < 6; index++) {
            // then identify yellow elements
            if (colorArray[index] !== "green") {
                if (answerArray.includes(guessWord[index])) {
                    colorArray[index] = "yellow"; // colorArray's index follows guessWord's index
                    answerArray[answerArray.join("").indexOf(guessWord[index])] = "_";
                    // console.log(answerArray);
                } else {
                    colorArray[index] = "grey";
                }
            }
        }
    }
    console.log(colorArray);

    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <SingleSquare color={colorArray[0]} letter={guessWord[0]}/>
            <SingleSquare color={colorArray[1]} letter={guessWord[1]}/>
            <SingleSquare color={colorArray[2]} letter={guessWord[2]}/>
            <SingleSquare color={colorArray[3]} letter={guessWord[3]}/>
            <SingleSquare color={colorArray[4]} letter={guessWord[4]}/>
            <SingleSquare color={colorArray[5]} letter={guessWord[5]}/>
        </div>
    )
}