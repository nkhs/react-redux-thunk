import { combineReducers } from 'redux';
const getPosts = import('./post')

export default combineReducers({
    posts: getPosts
});
