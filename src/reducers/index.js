import { combineReducers } from 'redux';
import inGameReducer from './inGameReducer';
import gameBoardReducer from './gameBoardReducer'

export default combineReducers({
  inGame: inGameReducer,
  boardNumbers: gameBoardReducer
});