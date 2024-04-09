/* this is the row level */

import React from "react";
import SingleSquareForHard from "./SingleSquareForHard";
import { useContext } from "react";
import { hardContext } from "./HardProvider";

const secrectWords = ["jacuzzi", "puzzles", "maximum",
                    "amazing", "jewelry", "project",
                    "pumpkin", "mailbox", "skywalk", "citizen"]

export default function SevenSquares (props) {

    const guessWord = props.word
    const [round, setRound] = useContext(hardContext);
    const answer = secrectWords[round]

    const answerArray = answer.split(""); // split because string is immutable

    let colorArray = ["", "", "", "", "", "", ""];

    if (guessWord.length !== 0) {
        for (let index = 0; index < 7; index++) {
            // first identify green elements (have priority)
            if (guessWord[index] === answer[index]) {
                colorArray[index] = "green";
                answerArray[index] = "_";
            }
        }
        console.log(colorArray);

        for (let index = 0; index < 7; index++) {
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

    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <SingleSquareForHard color={colorArray[0]} letter={guessWord[0]} />
            <SingleSquareForHard color={colorArray[1]} letter={guessWord[1]} />
            <SingleSquareForHard color={colorArray[2]} letter={guessWord[2]} />
            <SingleSquareForHard color={colorArray[3]} letter={guessWord[3]} />
            <SingleSquareForHard color={colorArray[4]} letter={guessWord[4]} />
            <SingleSquareForHard color={colorArray[5]} letter={guessWord[5]} />
            <SingleSquareForHard color={colorArray[6]} letter={guessWord[6]} />
        </div>
    )
}