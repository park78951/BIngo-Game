import React from 'react';
import Style from './styles';
import Button from '../CustomButton';

const Modal = ({ children, onClick }) => {

  return (
    <Style.ModalWrapper>
      <p>{ children }</p>
      <Button onClick={ onClick }>
        확인
      </Button>
    </Style.ModalWrapper>
  );
};

export default Modal;