import React from 'react';
import BingoBoard from './BingoBoard';
import { PLAYER1, PLAYER2 } from '../../helper/conatants/dataType';
import Style from './styles';

const GameBoard = () => {
  return (
    <Style.GameBoardWrapper>
      <BingoBoard key={ PLAYER1 } />
      <BingoBoard key={ PLAYER2 } />
    </Style.GameBoardWrapper>
  );
};

export default GameBoard;