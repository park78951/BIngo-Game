import { boardNumbers } from './initState';
import { getBingoNumbers, markSelected } from '../helper';
import { START_GAME, SELECT_NUMBER } from '../actions/type'
import { PLAYER1, PLAYER2 } from '../conatants';

const gameBoardReducer = (state = boardNumbers, action) => {
  const { type, payload } = action;

  switch(type) {
    case START_GAME:
      return {
        [PLAYER1]: getBingoNumbers(),
        [PLAYER2]: getBingoNumbers()
      }

    case SELECT_NUMBER:
      const numbersForPlayer1 = markSelected(state[PLAYER1], payload);
      const numbersForPlayer2 = markSelected(state[PLAYER2], payload);

      return {
        [PLAYER1]: numbersForPlayer1,
        [PLAYER2]: numbersForPlayer2
      };

    default:
      return {
        ...state
      };
  };
};

export default gameBoardReducer;