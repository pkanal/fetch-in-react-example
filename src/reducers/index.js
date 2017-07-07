import { combineReducers } from 'redux'

import { INPUT_CHANGE, SET_POKEMON } from '../actions';

const textInput = (state = '', action) => {
  if(action.type === INPUT_CHANGE) {
    return action.payload
  }

  return state;
};

const pokemon = (state = null, action) => {
  if(action.type === SET_POKEMON) {
    return action.payload;
  }

  return state;
}

export default combineReducers({
  textInput,
  pokemon,
});
