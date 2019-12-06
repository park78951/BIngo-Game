import { PLAYER1, PLAYER2 } from '../conatants';

export const inGameStatus = {
  isPlaying: false,
  turn: PLAYER1
};

export const boardNumbers = {
  [PLAYER1]: [],
  [PLAYER2]: []
};

export const completeLines = {
  [PLAYER1]: [],
  [PLAYER2]: []
}