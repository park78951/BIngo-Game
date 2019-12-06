import React, { useMemo } from 'react';
import BingoCell from '../BingoCell';
import Style from './styles';

const BingoBoard = ({ numbers, player }) => {
  const bignoCells = useMemo(() => numbers.flat()
    .map(numObj => {
      const { number, selected } = numObj;
      
      return (
        <BingoCell 
          key={ Date.now() * number }
          selected={ selected }
          number={ number }
          player={ player }
        />
      );
  }));

  return (
    <Style.BingoBoardWrapper>
      { bignoCells}
    </Style.BingoBoardWrapper>
  );
};

export default BingoBoard;