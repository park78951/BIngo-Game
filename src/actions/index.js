import {
  START_GAME,
  SELECT_NUMBER,
  UPDATE_COMPLETE_LINE,
  SHOW_MODAL,
  CLOSE_MODAL
} from './type';
import { PLAYER1, PLAYER2 } from '../conatants';
import { 
  getCompleteLines, 
  getFinishingMessage, 
} from '../helper';

export const startGame = () => ({
  type: START_GAME
});

export const showModal = payload => ({
  type: SHOW_MODAL,
  payload
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const selectNumber = payload => (dispatch, getState) => {
  dispatch({
    type: SELECT_NUMBER,
    payload
  });

  const { boardNumbers, completeLines } = getState();

  const completeLinesPlayer1 = getCompleteLines(boardNumbers[PLAYER1], completeLines[PLAYER1]);
  const completeLinesPlayer2 = getCompleteLines(boardNumbers[PLAYER2], completeLines[PLAYER2]);

  dispatch({
    type: UPDATE_COMPLETE_LINE,
    payload: {
      [PLAYER1]: completeLinesPlayer1,
      [PLAYER2]: completeLinesPlayer2,
    }
  });

  const finishingMessage = getFinishingMessage({
    completeLinesPlayer1,
    completeLinesPlayer2
  });

  finishingMessage && dispatch({ 
    type: SHOW_MODAL, 
    payload: finishingMessage 
  });
};