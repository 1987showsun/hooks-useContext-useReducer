/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
import home from './home';

const combineReducer = reducers => {
    const reducerKeys = Object.keys(reducers);
    let objInitState = {}

    reducerKeys.forEach((key) => {
        const initState = reducers[key](undefined, { type: '' })
        if (initState === 'undefined'){
            throw new Error(`${key} does not return state.`)
        }
        objInitState[key] = initState
    })
    return (state, action) => {
        if(action){
            console.log( action );
            reducerKeys.forEach((key) => {
                const previousState = objInitState[key]
                objInitState[key] = reducers[key](previousState, action)
            })
        }
        return { ...objInitState };
    }
}

export const reducers = combineReducer({
    home
})