import * as actionTypes from '../actions/type';

const dataPosts = (state=[], action) => {
    switch(action.type) {
        case actionTypes.GET_POSTS:
        return action.data;
        default:
        return state;
    }
}

export default dataPosts;