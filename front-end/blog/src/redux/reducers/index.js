import { combineReducers } from 'redux';
import dataPosts from './dataPosts';
import dataComments from './dataComments';

const rootReducer = combineReducers({
    dataPosts,
    dataComments,
})

export default rootReducer;