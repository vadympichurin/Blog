import React, {Component, Fragment} from 'react';
import {getDataCommentsAsync} from '../../redux/actions/getDataComments';
import {getDataPostsAsync} from '../../redux/actions/getDataPosts';
import {getNewComment} from '../../redux/actions/getNewComment';

import {connect} from 'react-redux';
import InputComment from '../InputComment/InputComment';
import axios from 'axios';
import PropTypes from 'prop-types';
import './PostDescription.css';



class PostDescription extends Component {

    state = {
        inputValueComm: '',
        newComment: {},
    }

    componentDidMount() {
        this.props.getDataComments();
        this.props.getDataPosts();
    }

    onePostComments = () => {
      return this.props.dataComments.map(el => +el.postId === +this.props.match.params.id ? <li className="comments_item" key={el.id}>{el.body}</li> : null)
    }

    onePost = () => {
        return this.props.dataPosts.map(el => +el.id === +this.props.match.params.id ? 
            (<Fragment key={el.id}><h3 className="onePost_title">{el.title}</h3> <p className="onePost_body">{el.body}</p></Fragment>)
                : null)
    }

inputChange = (event) => {
    let inputTextCom = event.target.value;
    this.setState ({
        inputValueComm: inputTextCom
    })
  };
    
      addComment = (event) => {
        let newComment = {
            postId: this.props.match.params.id,
            body: this.state.inputValueComm,
        };
        this.setState (
            {
                newComment: newComment,
                inputValueComm: '',
            }, () => newComment.body === "" ? null : this.postNewComment(newComment)
        )
      };

      postNewComment = (obj) => {
        let config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        axios.post("http://localhost:3001/comments",{postId: obj.postId, body: obj.body},config)
        .then(res => this.props.getNewComment(res.data))
        .catch(err => console.log(err))
      }
       

    render () {
        const showComments = this.onePostComments();
        const showPost = this.onePost();

    return (
        <div className="one_post_wrapper">
            <InputComment inputChange={this.inputChange} addComment={this.addComment} inputValueComm={this.state.inputValueComm} postNewComment={this.postNewComment} />
            {showPost}
            <span>Comments:</span>
            <ul>
                {showComments}
            </ul>
        </div>
        )
    }
}

const MSTP = state => ({
    dataPosts: state.dataPosts,
    dataComments: state.dataComments,
})

const MDTP = dispatch => ({
    getDataComments: () => {
        dispatch(getDataCommentsAsync())
    },
    getDataPosts: () => {
        dispatch(getDataPostsAsync())
    },
    getNewComment: (x) => {
        dispatch(getNewComment(x))
    },
})

PostDescription.propTypes = {
    dataPosts: PropTypes.array,
    dataComments: PropTypes.array,
}

export default connect(MSTP,MDTP)(PostDescription);