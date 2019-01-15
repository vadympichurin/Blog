import * as actionTypes from './type';
import axios from 'axios';

export const getDataPosts = data => ({
    type: actionTypes.GET_POSTS,
    data,
})

function fetchGetPosts() {
    return axios.get("http://localhost:3001/posts")
}

export const getDataPostsAsync = () => dispatch => {
    fetchGetPosts()
        .then(result => dispatch(getDataPosts(result.data)))
        .catch(err => console.log(err))
};
