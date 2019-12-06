import React from 'react';
import Header from '../../components/Header';
import GameBoard from '../../components/GameBoard'
import Style from './styles';

const GameContainer = () => {
  return (
    <Style.GameContainerWrapper>
      <Header />
      <GameBoard />
    </Style.GameContainerWrapper>
  );
};

export default GameContainer;