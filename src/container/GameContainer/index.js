import React from 'react';
import Header from '../../components/Header';
import GameBoard from '../../components/GameBoard'
import ModalContainer from '../ModalContainer';
import { useSelector } from 'react-redux';
import Style from './styles';

const GameContainer = () => {
  const { isModalOpen, message} = useSelector(({ modal }) => ({
    isModalOpen: modal.isModalOpen,
    message: modal.message
  }));
  
  return (
    <Style.GameContainerWrapper>
      <Header />
      <GameBoard />
      { isModalOpen && <ModalContainer message={ message } /> }
    </Style.GameContainerWrapper>
  );
};

export default React.memo(GameContainer);