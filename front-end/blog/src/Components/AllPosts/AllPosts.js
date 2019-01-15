import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './AllPosts.css';


const AllPosts = ({dataPosts}) => {
    
    return (
        <div>
            <h2>Blog</h2>
            <ul className="posts_list">
                {dataPosts.map(el => 
                <li className="posts_item" id={el.id} key={el.id} >
                <NavLink className="post_link" to={`/posts/${el.id}`} id={el.id}>
                {el.title}
                </NavLink>
                </li>)}

            </ul>
        </div>
    )
}

const MSTP = state => ({
    dataPosts: state.dataPosts,
});

AllPosts.propTypes = {
    dataPosts: PropTypes.array,
}

export default connect(MSTP)(AllPosts);