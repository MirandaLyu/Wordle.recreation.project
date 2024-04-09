import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const normalContext = createContext();


export function NormalProvider(props) {

    const [round, setRound] = useState(0);

    return (
        <normalContext.Provider value={[round, setRound]}>
            {props.children}
        </normalContext.Provider>
    )

}

