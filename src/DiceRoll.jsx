import React, { useState } from 'react'

const typesOfDie = [2, 4, 6, 8, 10, 12, 20, 100]

function DiceRoll() {
    const [currVal, setCurrVal] = useState(0);
    const [text, setText] = useState("");
    let arr = []
    const rand = (typeOfDice) => {
        return Math.floor((Math.random() * typeOfDice)) + 1
    }
    typesOfDie.forEach(element => 
        arr.push(
            <span style={{ padding: '2px' }}>
                <button id={`dice-${element}`} onClick={() => {
                    setCurrVal(element);
                    setText(`The value is ${rand(element)}`)
                }}>
                    {`d${element}`}
                </button>
            </span>
        )
    )
    return (
        <div>
            Roll a certain type of dice:
            <div style={{padding: '5px', alignItems: 'row'}}>
                {arr}
            </div>
            {text}
        </div>
    )
}

export default DiceRoll