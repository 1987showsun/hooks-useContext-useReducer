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
    const { member }   = state;
    const { id, name, keyword } = action;
    switch( action.type ){
        case 'ADD_MEMBER':
            const mergeMember = [ ...member, { id: id, name: name }];
            state = { ...state, member: mergeMember };
            break;

        case 'DELETE_MEMBER':
            const returnMember = deleteMembers( member, id );
            state = { ...state, member: returnMember };
            break;

        case 'SEARCH_MEMBER':
            state = { ...state, filterMember: searchMembers({member, name: keyword}) };
            break;

        case 'UPDATE_MEMBER':
            state = { ...state, member: updateMember({member, name, id}) };
            break;

        default:
            break;
    }
    return state;
}