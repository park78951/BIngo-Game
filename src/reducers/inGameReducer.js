import { START_GAME } from '../actions/type';
import { inGameState } from './initState';

const inGameReducer = (state = inGameState, action) => {
  const { type, payload } = action;

  switch(type) {
    case START_GAME:
      return {
        ...state,
        isPlaying: true
      }

    default:
      return {
        ...state
      };
  };
};

export default inGameReducer;