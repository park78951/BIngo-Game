import React, { useCallback } from 'react';
import Modal from '../../components/Modal';
import { useDispatch } from 'react-redux';
import { 
  startGame, 
  closeModal 
} from '../../actions';
import { WRONG_TURN_MESSAGE } from '../../conatants';
import Style from './styles';

const ModalContainer = ({ message }) => {
  const dispatch = useDispatch();

  const confirmModal = useCallback(() => {
    if(message === WRONG_TURN_MESSAGE) {
      dispatch(closeModal());
      return;
    }
    
    dispatch(startGame());
  }, [message]);
  
  return (
    <Style.ModalContainerWrapper>
      <Modal onClick={ confirmModal }>
        { message }
      </Modal>
    </Style.ModalContainerWrapper>
  );
};

export default ModalContainer;