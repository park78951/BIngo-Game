import { START_GAME, SELECT_NUMBER } from '../actions/type';
import { inGameStatus } from './initState';
import { PLAYER1, PLAYER2 } from '../conatants';

const inGameReducer = (state = inGameStatus, action) => {
  const { type } = action;

  switch(type) {
    case START_GAME:
      return {
        ...inGameStatus,
        isPlaying: true
      }
      
    case SELECT_NUMBER:
      return {
        ...state,
        turn: state.turn === PLAYER1 ? PLAYER2 : PLAYER1
      }

    default:
      return {
        ...state
      };
  };
};

export default inGameReducer;