import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import App from '../../App';
import PostDescription from '../PostDescription/PostDescription';
import PropTypes from 'prop-types';



class Root extends Component {
    state = {
        id: null,
    }

    render () {
        return (
            <Switch>
                <Route exact path="/" render={ props => <App/> } />
                <Route exact path="/posts/:id" render={props => <PostDescription {...props} />} />
            </Switch>
        )
    }
}

const MSTP = state => ({
    dataPosts: state.dataPosts,
})

Root.propTypes = {
    dataPosts: PropTypes.array,
}

export default withRouter(connect(MSTP)(Root));