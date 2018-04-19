import { CREATE_POST, EDIT_POST, SET_FILTER } from './actionTypes';
import { combineReducers } from 'redux';

function postsReducer (state = [], action) {

  switch(action.type) {
    case CREATE_POST: {
      const { type, ...post } = action;

      return [ ...state, post];
    }

    case EDIT_POST: {
      const { type, id, ...newPost } = action;

      return state.map( (oldPost, index) => {
        action.id === index ? { ...oldPost, ...newPost } : oldPost ;
      });
    }

    default: {
      return state
    }

  }

}

function filterReducer(state = 'all', action) {
  if(action.type === SET_FILTER) {
    return action.filter;
  } else {
    return state;
  }
}

const appReducer = comebineReducers({
  posts: postsReducer,
  filter: filterReducer,
})

export default appReducer;
