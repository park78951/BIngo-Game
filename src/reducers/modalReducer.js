import { modalStatus } from './initState';
import { 
  START_GAME, 
  SHOW_MODAL, 
  CLOSE_MODAL 
} from '../actions/type';

const modalReducer = (state = modalStatus, action) => {
  const { type, payload } = action;
  
  switch(type) {
    case START_GAME:
      return {
        ...modalStatus
      };

    case SHOW_MODAL:
      return {
        isModalOpen: true,
        message: payload
      };

    case CLOSE_MODAL:
      return {
        ...modalStatus
      }

    default:
      return {
        ...state
      };
  };
};

export default modalReducer;