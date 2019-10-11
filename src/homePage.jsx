import DiceRoll from './DiceRoll';
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";

import styled from '@emotion/styled'

const DiceContainer = styled('div')({});

const DiceHomePage = () => (
    <DiceContainer>
        <h1>
            Dice Roller:
        </h1>
        <h3>
            Click on one of the following buttons: it will give you the value of throwing a dice once.
        </h3>
        <DiceRoll />
    </DiceContainer>
)

function Renderer() {
    return (
        <Router>
            <div>
                <div>
                    <Link to="/">Home</Link>
                    <hr />
                    <Link to="/slogan">Link to Slogan</Link>
                </div>
                <Switch>
                    <Route path="/slogan">
                        <Slogan />
                    </Route>
                    <Route path="/">
                        <DiceHomePage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

function Slogan() {
    return <h2>May the gods be ever in your favor.</h2>
}

export default Renderer;