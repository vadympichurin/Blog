import * as actionTypes from './type';
import axios from 'axios';

export const getDataComments = data => ({
    type: actionTypes.GET_COMMENTS,
    data,
})

function fetchGetComments() {
    return axios.get("http://localhost:3001/comments")
}

export const getDataCommentsAsync = () => dispatch => {
    fetchGetComments()
        .then(result => dispatch(getDataComments(result.data)))
        .catch(err => console.log(err))
};
