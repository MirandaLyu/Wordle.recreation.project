/* this is where the normal version page is updated */

import React, { useContext } from "react";
import { useState } from 'react';
import BoardOfSix from "./BoardOfSix";
import Navbar from "./Navbar";
import { normalContext } from "./NormalProvider";


const secrectWords = ["memory", "avenue", "hardly",
                    "planet", "review", "secret",
                    "ticket", "valley", "wonder", "native"]

export default function NormalVersion () {
    let l = ["", "", "", "", "", ""]
    const [word, setWord] = useState("")
    const [wordList, setWordList] = useState(l)
    const [attempts, setAttempts] = useState(0)
    const [round, setRound] = useContext(normalContext);

    const show = (event) => {
        setWord(String(event.target.value).toLowerCase())
    }

    const check = () => {
        if (word.length !== 6) {
            alert("Please enter a 6-letter word")
        } else {
            setAttempts(attempts + 1)
            const newL = wordList.map((str, i) => {
                if (i === attempts) {
                    return word
                } else {
                    return str
                }
            })
            setWordList(newL)
            setWord("")
            if (word === secrectWords[round]) {
                alert("Congratulations, you got it! Do you want to guess the next word?")
                setWordList(l)
                setAttempts(0)
                setRound(round + 1)
            }
        }
    }

    if (attempts === 6) {
        alert("Sorry, you lose. Would you like to try another word?")
        setWordList(l)
        setAttempts(0)
        setRound(round + 1)
    }


    return (
        <div>
            <Navbar />
            <div style={{display: "flex", justifyContent: "center", 
            flexDirection: "column", alignItems: "center", gap: 8, padding: 20}}>
            <div>Please enter your guess:
                <input type="text" onChange={show} value={word}></input>
                <button onClick={check}>submit</button></div>
            <div>You have {6 - attempts} attempts left</div>
            <div><BoardOfSix wList={wordList}/></div></div>
        </div>
    )
}