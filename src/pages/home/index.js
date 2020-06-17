/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
import React, { useState, useContext } from 'react';

// Components
import List                            from './components/list';

import { contexts }                       from '../../context';

const Index = () => {

    const [ form      , setForm        ] = useState({ name: "" });
    const [ searchForm, setSearchForm  ] = useState({ name: "" });
    const [ state, dispatch  ] = useContext(contexts);
    const handleChange = (actionType, e) => {
        const { name, value } = e.target;
        switch( actionType ){
            case 'ADD':
                setForm({
                    ...form,
                    [name]: value
                });
                break;

            default:
                setSearchForm({
                    ...searchForm,
                    [name]: value
                })
                break;
        }
    }
    const handleSubmit = (actionType, e) => {
        e.preventDefault();
        switch( actionType ){
            case 'ADD':
                const ADD_NAME = form.name;
                if( name.trim()!="" ){
                    dispatch({ type: 'ADD_MEMBER', payload: ADD_NAME });
                    setForm({
                        ...form,
                        name: ""
                    });
                }
                break;

            default:
                const SEARCH_NAME = searchForm.name;
                dispatch({ type: 'SEARCH_MEMBER', search: SEARCH_NAME });
                break;
        }
    }

    const { name }   = form;

    return(
        <div className="todo-wrap">
            <form className="todo-form" onSubmit={handleSubmit.bind(this,'ADD')}>
                <input type="text" name="name" value={name} onChange={handleChange.bind(this,'ADD')} />
                <button type="submit">ADD</button>
            </form>
            <form className="todo-form" onSubmit={handleSubmit.bind(this,'SEARCH')}>
                <input type="text" name="name" value={searchForm.name} onChange={handleChange.bind(this,'SEARCH')} />
                <button type="submit">SEARCH</button>
            </form>
            <List 
                condition = {searchForm.name}
            />
        </div>
    )
}

export default Index;