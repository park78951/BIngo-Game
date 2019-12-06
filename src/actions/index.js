import {
  START_GAME,
  SELECT_NUMBER,
  UPDATE_COMPLETE_LINE
} from './type';
import {
  PLAYER1,
  PLAYER2
} from '../conatants';
import { getCompleteLines } from '../helper';

export const startGame = () => ({
  type: START_GAME
});

export const selectNumber = payload => (dispatch, getState) => {
  dispatch({
    type: SELECT_NUMBER,
    payload
  });

  const { boardNumbers } = getState();

  const completeLinesPlayerOne = getCompleteLines(boardNumbers[PLAYER1]);
  const completeLinesPlayerTwo = getCompleteLines(boardNumbers[PLAYER2]);

  dispatch({
    type: UPDATE_COMPLETE_LINE,
    payload: {
      [PLAYER1]: completeLinesPlayerOne,
      [PLAYER2]: completeLinesPlayerTwo
    }
  });
};