import React from "react";
import './SingleSquare.css'


export default function SingleSquareForHard (props) {

    let color = "default"

    if (props.color !== "") {
        color = props.color
    }

    const letter = props.letter


    return (
            <div className={color}>{letter}</div>
    )
}