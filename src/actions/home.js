/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

export const searchMembers = ({member, name}) => {
    return member.filter(item => {
        if( item.indexOf(name)>-1 ){
            return true;
        }else{
            return false;
        }
    });
}

export const deleteMembers = ( member, FIND_INDEX ) => {
    return member.filter((item,i) => i!=FIND_INDEX);
}

export const updateMember = ({member, name, index}) => {
    return member.map((item,i) => {
        if( i==index ){
            item = name;
        }
        return item;
    });
}