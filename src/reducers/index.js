import { combineReducers } from 'redux';
import inGameReducer from './inGameReducer';
import gameBoardReducer from './gameBoardReducer'
import completeLinesReducer from './completeLinesReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  inGame: inGameReducer,
  boardNumbers: gameBoardReducer,
  completeLines: completeLinesReducer,
  modal: modalReducer
});