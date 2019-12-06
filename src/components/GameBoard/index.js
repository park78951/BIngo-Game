import React from 'react';
import BingoBoard from './BingoBoard';
import { useSelector } from 'react-redux';
import { PLAYER1, PLAYER2 } from '../../conatants';
import Style from './styles';

const GameBoard = () => {
  const boardNumbers = useSelector(({ boardNumbers }) => boardNumbers);

  return (
    <Style.GameBoardWrapper>
      <BingoBoard 
        key={ PLAYER1 }
        numbers={ boardNumbers[PLAYER1] } 
        player={ PLAYER1 }
      />
      <BingoBoard 
        key={ PLAYER2 } 
        numbers={ boardNumbers[PLAYER2] }
        player={ PLAYER2 }
      />
    </Style.GameBoardWrapper>
  );
};

export default GameBoard;