/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

export const searchMembers = ({member, name}) => {
    return member.filter(item => {
        if( item.name.indexOf(name)>-1 ){
            return true;
        }
    });
}

export const deleteMembers = ( member, id ) => {
    return member.filter((item,i) => item.id!=id);
}

export const updateMember = ({member, name, id}) => {
    return member.map((item,i) => {
        if( item.id==id ){
            return { ...item, name: name };
        }
        return item;
    });
}