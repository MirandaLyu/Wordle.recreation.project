import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const hardContext = createContext();


export function HardProvider(props) {

    const [round, setRound] = useState(0);

    return (
        <hardContext.Provider value={[round, setRound]}>
            {props.children}
        </hardContext.Provider>
    )

}