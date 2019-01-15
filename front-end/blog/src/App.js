import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getDataPostsAsync} from './redux/actions/getDataPosts';
import AllPosts from './Components/AllPosts/AllPosts';

class App extends Component {

componentDidMount() {
this.props.getDataPosts();
}
  
  render() {
    return (
      <div className="App">
      <AllPosts/>
      </div>
    );
  }
}

const MDTP = dispatch => ({
  getDataPosts: () => {
    dispatch(getDataPostsAsync())
  },
})

export default connect(null, MDTP)(App);
