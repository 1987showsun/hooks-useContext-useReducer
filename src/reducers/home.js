/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

// Actions
import { searchMembers, deleteMembers, updateMember } from '../actions/home';

export default ( 
    state={
        member      : [],
        filterMember: []
    },
    action 
) => {
    const { member } = state;
    switch( action.type ){
        case 'ADD_MEMBER':
            const mergeMember = [ ...member, action.payload];
            state = { ...state, member: mergeMember };
            break;

        case 'DELETE_MEMBER':
            const FIND_INDEX   = action.payload;
            const returnMember = deleteMembers( member, FIND_INDEX );
            state = { ...state, member: returnMember };
            break;

        case 'SEARCH_MEMBER':
            const SEARCH_NAME = action.search;
            state = { ...state, filterMember: searchMembers({member, name: SEARCH_NAME}) };
            break;

        case 'UPDATE_MEMBER':
            const name  = action.payload;
            const index = action.index;
            state = { ...state, member: updateMember({member, name, index}) };
            break;

        default:
            break;
    }
    return state;
}