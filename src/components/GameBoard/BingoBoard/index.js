import React, { useMemo } from 'react';
import BingoCell from '../BingoCell';
import Style from './styles';

const BingoBoard = ({ numbers }) => {
  const bignoCells = useMemo(() => numbers.flat()
    .map((numObj, index) => {
      const { number, selected } = numObj;
      
      return (
        <BingoCell 
          key={ Date.now() * number }
          selected={ selected }
          number={ number }
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