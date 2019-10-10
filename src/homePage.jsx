import DiceRoll from './DiceRoll';
import React from 'react';

function HomePage() {

    return (
        <div>
            <h1>
                Dice Roller:
            </h1>
            <h3>
                Click on one of the following buttons: it will give you the value of throwing a dice once.
            </h3>
            <DiceRoll />
        </div>
    )
}

export default HomePage;