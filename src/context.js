/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

import React, { createContext, useReducer } from 'react';

import { reducers }                         from './reducers';

export const contexts = createContext();

const initState       = reducers();

export default({children}) => {
    return(
        <contexts.Provider value={useReducer(reducers, initState)}>
            { children }
        </contexts.Provider>
    );
}