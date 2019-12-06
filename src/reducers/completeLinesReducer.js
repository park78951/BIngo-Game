import { UPDATE_COMPLETE_LINE, START_GAME } from '../actions/type';
import { completeLines } from './initState';

const completeLinesReducer = (state = completeLines, action) => {
  const { type, payload } = action;

  switch(type) {
    case START_GAME:
      return {
        ...completeLines
      }

    case UPDATE_COMPLETE_LINE:
      return {
        ...payload
      }

    default:
      return {
        ...state
      }
  }
};

export default completeLinesReducer;