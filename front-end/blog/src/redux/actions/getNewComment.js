import * as actionTypes from './type';

export const getNewComment = com => ({
    type: actionTypes.GET_NEW_COMMENT,
    com,
})