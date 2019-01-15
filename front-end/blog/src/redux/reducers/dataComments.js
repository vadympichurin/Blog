import * as actionTypes from '../actions/type';

const dataComments = (state=[], action) => {
    switch(action.type) {
        case actionTypes.GET_COMMENTS:
        return action.data;
        case actionTypes.GET_NEW_COMMENT:
        return [...state, action.com];
        default:
        return state;
    }
}

export default dataComments;