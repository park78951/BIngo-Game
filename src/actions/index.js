import {
  START_GAME,
  SELECT_NUMBER
} from './type';

export const startGame = () => ({
  type: START_GAME
});

export const selectNumber = payload => ({
  type: SELECT_NUMBER,
  payload
});