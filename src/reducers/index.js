import { combineReducers } from 'redux';
import inGameReducer from './inGameReducer';

export default combineReducers({
  inGame: inGameReducer
})