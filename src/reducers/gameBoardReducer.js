import { boardNumbers } from './initState';
import { getBingoNumbers } from '../helper';
import { START_GAME } from '../actions/type'
import { PLAYER1, PLAYER2 } from '../conatants';

const gameBoardReducer = (state = boardNumbers, action) => {
  const { type, payload } = action;

  switch(type) {
    case START_GAME:
      return {
        [PLAYER1]: getBingoNumbers(),
        [PLAYER2]: getBingoNumbers()
      }

    default:
      return {
        ...state
      };
  };
};

export default gameBoardReducer;