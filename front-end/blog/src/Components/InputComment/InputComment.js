import React from 'react';
import PropTypes from 'prop-types';
import './InputComment.css';


const InputComment = ({inputChange, addComment, inputValueComm}) => {

function mainCommentFunc (event) {
    event.preventDefault();
    addComment();
}

    return (
        <div className="input_wrapper">
            <form onSubmit={mainCommentFunc} className="input_form">
                <input type="text" 
                    onChange={inputChange}
                    value={inputValueComm}
                    className="text"
                    placeholder="Enter your comment..." />
                <input type="submit" value="Submit" className="submit"/>
            </form>

        </div>
    )
}

InputComment.propTypes = {
    inputChange: PropTypes.func,
    addComment: PropTypes.func,
    inputValueComm: PropTypes.string,
}

export default InputComment;