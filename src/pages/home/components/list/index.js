/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
import React, { useState, useContext, useEffect } from 'react';

import { contexts }                    from '../../../../context';

export default ({ keyword }) => {

    const [ stateForm     , setForm      ] = useState({name: ""});
    const [ stateUpdateId , setUpdateId  ] = useState("");
    const [ stateMember   , setMember    ] = useState([]);
    const [ state, dispatch ] = useContext(contexts);
    const { member, filterMember }       = state.home;

    const handleChange = ( e )   => {
        const { name, value } = e.target;
        setForm({...stateForm, [name]: value});
    }

    const handleSubmit = ( e )   => {
        e.preventDefault();
        const { name } = stateForm;
        dispatch({ type: 'UPDATE_MEMBER', name: name, id: stateUpdateId });
        dispatch({ type: 'SEARCH_MEMBER', keyword });
        setUpdateId("");
    }

    const handleRemove = ( val ) => {
        const { id } = val;
        dispatch({type: 'DELETE_MEMBER', id: id});
        dispatch({ type: 'SEARCH_MEMBER', keyword });
    }

    useEffect(() => {
        const renderMember = keyword!=""?(
            filterMember
        ):(
            member
        );
        console.log(  keyword!="" );
        setMember(renderMember);
    },[member, filterMember]);

    const { name } = stateForm;

    return(
        <div className="list">
            {
                stateMember.map((item,i) => {
                    return(
                        <div key={item.id} className="items">
                            {
                                stateUpdateId!=item.id? (
                                    <>
                                        <div className="name">{item.name}</div>
                                        <ul className="tool">
                                            <li>
                                                <button
                                                    className="update"
                                                    onClick={() => {
                                                        setUpdateId(item.id);
                                                        setForm({name: item.name});
                                                    }}
                                                >
                                                    編輯
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="remove"
                                                    onClick={handleRemove.bind(this, item)}
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