import { combineReducers } from 'redux';
import inGameReducer from './inGameReducer';
import gameBoardReducer from './gameBoardReducer'
import completeLinesReducer from './completeLinesReducer';

export default combineReducers({
  inGame: inGameReducer,
  boardNumbers: gameBoardReducer,
  completeLines: completeLinesReducer
});