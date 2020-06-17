/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
import React, { useState, useContext, useEffect } from 'react';

import { contexts }                    from '../../../../context';

export default ({ condition }) => {

    const [ stateForm     , setForm      ] = useState({name: ""});
    const [ stateFindIndex, setFindIndex ] = useState(-1);
    const [ state, dispatch ] = useContext(contexts);
    const { member, filterMember }       = state.home;
    const renderMember     = filterMember.length!=0? filterMember:member;
    console.log( state );

    const handleChange = ( e )   => {
        const { name, value } = e.target;
        setForm({...stateForm, [name]: value});
    }

    const handleSubmit = ( e )   => {
        e.preventDefault();
        const { name } = stateForm;
        dispatch({type: 'UPDATE_MEMBER', payload: name, index: stateFindIndex });
        setFindIndex(-1);
    }

    const handleRemove = ( val ) => {
        dispatch({type: 'DELETE_MEMBER', payload: val});
    }

    const { name } = stateForm;

    return(
        <div className="list">
            {
                renderMember.map((item,i) => {
                    return(
                        <div key={i} className="items">
                            {
                                stateFindIndex!=i? (
                                    <>
                                        <div className="name">{item}</div>
                                        <ul className="tool">
                                            <li>
                                                <button
                                                    className="update"
                                                    onClick={() =>{ 
                                                        setFindIndex(i);
                                                        setForm({name: item});
                                                    }}
                                                >
                                                    編輯
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="remove"
                                                    onClick={handleRemove.bind(this, i)}
                                                >
                                                    刪除
                                                </button>
                                            </li>
                                        </ul>
                                    </>
                                ):(
                                    <form onSubmit={handleSubmit.bind(this)}>
                                        <div className="name">                           
                                            <input type="text" name="name" value={name} onChange={handleChange.bind(this)} />
                                        </div>
                                        <ul className="tool">
                                            <li>
                                                <button 
                                                    className="submit"
                                                    type="submit"
                                                >
                                                    更新
                                                </button>
                                            </li>
                                        </ul>
                                    </form>
                                )
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}