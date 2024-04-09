/* here is to color and format each letter in the guess word */

import './SingleSquare.css'


export default function SingleSquare (props) {
    let color = "default"

    if (props.color !== "") {
        color = props.color
    }

    const letter = props.letter


    return (
            <div className={color}>{letter}</div>
    )
}